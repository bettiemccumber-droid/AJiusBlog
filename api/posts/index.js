import { applyApiHeaders, isPublishAuthorized, readJsonBody, sendJson } from "../../lib/http.js";
import {
  articleUrl,
  parsePublishBody,
  serverDate,
  slugifyTitle,
  toPublicPost,
  toStoredPost,
  uniqueSlug
} from "../../lib/post-record.js";
import { appendPublishedPost, listPublishedPosts, StorageError } from "../../lib/posts-store.js";

/**
 * Blog publish API for zjads.
 *
 * POST https://www.ajiusblogs.top/api/posts
 *   Authorization: Bearer <PUBLISH_TOKEN>
 *   Saves the article to Vercel Blob. Does not write js/data.js or js/articles-content.js.
 *   bodyHtml is stored unchanged, including affiliate and tracking hrefs.
 *   merchantUrl is recorded only. The returned url is always
 *   https://www.ajiusblogs.top/post-detail?slug=...
 *
 * GET https://www.ajiusblogs.top/api/posts
 *   Public list of API-published posts. No PUBLISH_TOKEN.
 *
 * Set PUBLISH_TOKEN in the Vercel project.
 * Connect a private Blob store so BLOB_READ_WRITE_TOKEN or BLOB_STORE_ID is present.
 *
 * @param {import("http").IncomingMessage & { body?: unknown }} req
 * @param {import("http").ServerResponse} res
 */
export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    applyApiHeaders(res);
    res.status(204).end();
    return;
  }

  if (req.method === "GET") {
    try {
      const posts = await listPublishedPosts();
      sendJson(res, 200, posts.map((post) => toPublicPost(/** @type {import("../../lib/post-record.js").StoredPost} */ (post))));
    } catch (error) {
      sendStorageError(res, error, "Could not read published articles");
    }
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  if (!isPublishAuthorized(req)) {
    sendJson(res, 401, { error: "Unauthorized" });
    return;
  }

  let payload;
  try {
    payload = readJsonBody(req);
  } catch {
    sendJson(res, 400, { error: "Request body must be JSON" });
    return;
  }

  const parsed = parsePublishBody(payload);
  if (!parsed.ok) {
    sendJson(res, 400, { error: parsed.error });
    return;
  }

  try {
    const saved = await appendPublishedPost((taken) => {
      const slug = uniqueSlug(slugifyTitle(parsed.value.title), taken);
      return toStoredPost(parsed.value, slug, Date.now(), serverDate());
    });
    sendJson(res, 200, {
      slug: String(saved.slug),
      url: articleUrl(String(saved.slug))
    });
  } catch (error) {
    sendStorageError(res, error, "Could not save the article");
  }
}

/**
 * @param {import("http").ServerResponse} res
 * @param {unknown} error
 * @param {string} fallback
 */
function sendStorageError(res, error, fallback) {
  console.error(fallback, error);
  if (error instanceof StorageError) {
    sendJson(res, 503, { error: "Blob storage is not configured" });
    return;
  }
  sendJson(res, 500, { error: fallback });
}
