import { applyApiHeaders, sendJson } from "../../lib/http.js";
import { getPublishedBody, StorageError } from "../../lib/posts-store.js";

/**
 * GET https://www.ajiusblogs.top/api/posts/:slug
 * Returns { bodyHtml } for one API-published article. No PUBLISH_TOKEN.
 * Static articles stay in js/articles-content.js and are not served here.
 *
 * @param {import("http").IncomingMessage & { query?: { slug?: string|string[] } }} req
 * @param {import("http").ServerResponse} res
 */
export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    applyApiHeaders(res);
    res.status(204).end();
    return;
  }

  if (req.method !== "GET") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  const raw = req.query?.slug;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  if (!slug) {
    sendJson(res, 404, { error: "Article not found" });
    return;
  }

  try {
    const bodyHtml = await getPublishedBody(slug);
    if (bodyHtml == null) {
      sendJson(res, 404, { error: "Article not found" });
      return;
    }
    sendJson(res, 200, { bodyHtml });
  } catch (error) {
    console.error("Could not read article body", error);
    if (error instanceof StorageError) {
      sendJson(res, 503, { error: "Blob storage is not configured" });
      return;
    }
    sendJson(res, 500, { error: "Could not read the article" });
  }
}
