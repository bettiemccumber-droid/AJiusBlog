/**
 * AJiusBlog — Post detail page renderer
 */

/**
 * Resolve article slug from URL query or hash
 * @returns {string|null} Post slug
 */
function getPostSlug() {
  const fromQuery = getQueryParam("slug");
  if (fromQuery) return fromQuery;
  return window.location.hash.replace(/^#/, "") || null;
}

/**
 * Render keyword tags
 * @param {Object} post - Blog post data
 * @returns {string} Tags HTML
 */
function renderArticleTags(post) {
  if (!post.keywords?.length) return "";
  const tags = post.keywords.map(
    (kw) => `<a href="blog" class="tag-cloud__tag" data-search-tag="${kw}">${kw}</a>`
  ).join("");
  return `<div class="tag-cloud" style="margin-top:1.5rem;">${tags}</div>`;
}

/**
 * Render share widget
 * @returns {string} Share widget HTML
 */
function renderShareWidget() {
  return `
    <div class="share-widget">
      <span class="share-widget__label">Share this article</span>
      <div class="share-widget__buttons">
        <button class="share-widget__btn share-widget__btn--twitter" data-share="twitter" aria-label="Share on Twitter">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </button>
        <button class="share-widget__btn share-widget__btn--linkedin" data-share="linkedin" aria-label="Share on LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </button>
        <button class="share-widget__btn share-widget__btn--copy" data-share="copy" aria-label="Copy link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        </button>
      </div>
    </div>
  `;
}

/**
 * Render author bio card
 * @param {Object} post - Blog post data
 * @returns {string} Author card HTML
 */
function renderAuthorCard(post) {
  return `
    <div class="author-card">
      <div class="author-card__avatar">${post.author.charAt(0)}</div>
      <div>
        <div class="author-card__name">Written by ${post.author}</div>
        <p class="author-card__bio">Tech writer and remote work enthusiast. I test gear so you don't waste money on the wrong keyboard — or the wrong standing desk. Found something broken? Email <a href="mailto:bettiemccumber@gmail.com">bettiemccumber@gmail.com</a>.</p>
      </div>
    </div>
  `;
}

/**
 * Render article sidebar
 * @param {Object} post - Current post
 * @param {string} slug - Current slug
 * @returns {string} Sidebar HTML
 */
function renderArticleSidebar(post, slug) {
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const relatedHtml = related.map((p) => `
    <a href="post-detail?slug=${p.slug}" class="article-related-list__link">
      <img class="article-related-list__thumb" src="${p.image}" alt="${p.title}" loading="lazy">
      <div>
        <div class="article-related-list__title">${p.title}</div>
        <div class="article-related-list__meta">${p.date}</div>
      </div>
    </a>
  `).join("");

  return `
    <aside class="article-sidebar">
      <div class="widget article-info-card">
        <h3 class="widget__title">
          <span class="widget__title-icon">📄</span>
          Article Info
        </h3>
        <div class="article-info-card__row"><span>Published</span><span>${post.date}</span></div>
        <div class="article-info-card__row"><span>Category</span><span>${post.category}</span></div>
        <div class="article-info-card__row"><span>Author</span><span>${post.author}</span></div>
      </div>

      <div class="widget">
        <h3 class="widget__title">
          <span class="widget__title-icon">📖</span>
          More to Read
        </h3>
        <div class="article-related-list">${relatedHtml}</div>
      </div>

      <div class="widget">
        <h3 class="widget__title">
          <span class="widget__title-icon">✉</span>
          Stay Updated
        </h3>
        <p class="newsletter-widget__desc">Weekly picks — no spam.</p>
        <form class="newsletter-widget__form">
          <input type="email" class="newsletter-widget__input" placeholder="you@example.com" required aria-label="Email">
          <button type="submit" class="newsletter-widget__btn">Subscribe</button>
        </form>
        <p class="newsletter-widget__success">You're in!</p>
      </div>
    </aside>
  `;
}

/**
 * Initialize and render the post detail page
 */
function initPostDetailPage() {
  const slug = getPostSlug();
  if (!slug) {
    window.location.href = "blog";
    return;
  }

  const post = getPostBySlug(slug);
  if (!post) {
    document.getElementById("postContent").innerHTML = `
      <div class="text-center" style="padding: 4rem 0;">
        <h2>Article Not Found</h2>
        <p style="color: var(--color-text-muted); margin: 1rem 0 2rem;">The article you're looking for doesn't exist.</p>
        <a href="blog" class="btn btn--primary">Back to Blog</a>
      </div>
    `;
    return;
  }

  document.title = `${post.title} — AJiusBlog`;

  const badgeClass = getCategoryBadgeClass(post.category);
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prevPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;
  const nextPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;

  document.getElementById("postContent").innerHTML = `
    <header class="article-header article-header--wide">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="index.html" class="breadcrumb__link">Home</a>
          <span class="breadcrumb__separator">/</span>
          <a href="blog" class="breadcrumb__link">Blog</a>
          <span class="breadcrumb__separator">/</span>
          <span class="breadcrumb__current">${post.title}</span>
        </nav>
        <span class="badge ${badgeClass}">${post.category}</span>
        <h1 class="article-header__title">${post.title}</h1>
        <div class="article-header__meta">
          <div class="article-header__author">
            <div class="article-header__avatar">${post.author.charAt(0)}</div>
            <span>${post.author}</span>
          </div>
          <time datetime="${post.date}">${post.date}</time>
        </div>
        ${renderArticleTags(post)}
      </div>
    </header>

    <article class="section">
      <div class="container">
        <div class="article-layout">
          <div class="article-layout__main">
            <img class="article-hero-image" src="${post.image}" alt="${post.title}" loading="eager">
            <div class="article-content">
              ${post.content || "<p>Content loading...</p>"}
            </div>
            ${renderShareWidget()}
            ${renderAuthorCard(post)}
            ${renderRelatedProducts(post)}
            <nav class="post-nav" aria-label="Post navigation">
              ${prevPost ? `
                <a href="post-detail?slug=${prevPost.slug}" class="post-nav__item">
                  <div class="post-nav__label">← Previous</div>
                  <div class="post-nav__title">${prevPost.title}</div>
                </a>
              ` : "<div></div>"}
              ${nextPost ? `
                <a href="post-detail?slug=${nextPost.slug}" class="post-nav__item post-nav__item--next">
                  <div class="post-nav__label">Next →</div>
                  <div class="post-nav__title">${nextPost.title}</div>
                </a>
              ` : ""}
            </nav>
          </div>
          ${renderArticleSidebar(post, slug)}
        </div>
      </div>
    </article>
  `;

  bindArticleTagClicks();
  initShareButtons(window.location.href, post.title);
  onContentReady();
}

/**
 * Bind tag click → blog search
 */
function bindArticleTagClicks() {
  document.querySelectorAll("[data-search-tag]").forEach((tag) => {
    tag.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.setItem("blogSearch", tag.dataset.searchTag);
      window.location.href = "blog";
    });
  });
}

/**
 * Render related products section
 * @param {Object} post - Blog post data
 * @returns {string} Related products HTML
 */
function renderRelatedProducts(post) {
  if (!post.relatedProducts?.length) return "";

  const products = post.relatedProducts.map((id) => getProductById(id)).filter(Boolean);
  if (!products.length) return "";

  const cards = products.map((p) => `
    <div class="related-card">
      <div class="related-card__name">${p.name}</div>
      <div class="related-card__desc">${p.summary}</div>
      <a href="${p.affiliateUrl}" class="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer">${p.affiliateLabel}</a>
    </div>
  `).join("");

  return `
    <section class="related-section">
      <h3 class="related-section__title">Also mentioned in this article</h3>
      <p class="article-note" style="margin-bottom: 1rem;">Products we referenced above — worth a closer look.</p>
      <div class="related-section__grid">${cards}</div>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", initPostDetailPage);
