/**
 * AJiusBlog — Blog list page: search, filter, sort, view toggle & widgets
 */

/** @type {number} Posts displayed per page */
const POSTS_PER_PAGE = 6;

/** @type {string} Currently active category filter */
let activeCategory = "All";

/** @type {string} Current search query */
let searchQuery = "";

/** @type {string} Active tag filter */
let activeTag = "";

/** @type {number} Current page number */
let currentPage = 1;

/** @type {string} Sort order */
let sortOrder = "newest";

/** @type {string} View mode: grid | list */
let viewMode = "grid";

/**
 * Initialize the blog list page
 */
function initBlogPage() {
  renderStatsBar();
  renderFilterButtons();
  renderSidebarWidgets();
  initToolbar();
  applyFilters();

  const categoryParam = getQueryParam("category");
  if (categoryParam) {
    activeCategory = decodeURIComponent(categoryParam.replace(/\+/g, " "));
    document.querySelectorAll(".control-panel__filter-btn").forEach((btn) => {
      btn.classList.toggle("control-panel__filter-btn--active", btn.dataset.category === activeCategory);
    });
    applyFilters();
  }

  const savedSearch = sessionStorage.getItem("blogSearch");
  if (savedSearch) {
    sessionStorage.removeItem("blogSearch");
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.value = savedSearch;
      searchQuery = savedSearch.toLowerCase();
      applyFilters();
    }
  }

  onContentReady();
}

/**
 * Render top stats bar
 */
function renderStatsBar() {
  const bar = document.getElementById("statsBar");
  if (!bar) return;

  const counts = getCategoryCounts();
  const categories = Object.keys(counts).length;

  bar.innerHTML = `
    <div class="stats-bar__item">
      <div class="stats-bar__number" data-count="${BLOG_POSTS.length}">${BLOG_POSTS.length}</div>
      <div class="stats-bar__label">Articles</div>
    </div>
    <div class="stats-bar__item">
      <div class="stats-bar__number" data-count="${categories}">${categories}</div>
      <div class="stats-bar__label">Categories</div>
    </div>
    <div class="stats-bar__item">
      <div class="stats-bar__number" data-count="${getPopularTags().length}">${getPopularTags().length}</div>
      <div class="stats-bar__label">Topics</div>
    </div>
    <div class="stats-bar__item">
      <div class="stats-bar__number" data-count="${counts["Product Review"] || 0}">${counts["Product Review"] || 0}</div>
      <div class="stats-bar__label">Reviews</div>
    </div>
  `;

  initCounters("#statsBar [data-count]");
}

/**
 * Render sidebar widgets
 */
function renderSidebarWidgets() {
  renderTagCloud();
  renderCategoryChart();
  renderEditorsPick();
}

/**
 * Render popular tags cloud
 */
function renderTagCloud() {
  const cloud = document.getElementById("tagCloud");
  if (!cloud) return;

  cloud.innerHTML = getPopularTags().map(({ tag }) =>
    `<button class="tag-cloud__tag" data-tag="${tag}">${tag}</button>`
  ).join("");

  cloud.querySelectorAll(".tag-cloud__tag").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tag = btn.dataset.tag;
      if (activeTag === tag) {
        activeTag = "";
        btn.classList.remove("tag-cloud__tag--active");
        document.getElementById("searchInput").value = "";
        searchQuery = "";
      } else {
        activeTag = tag;
        cloud.querySelectorAll(".tag-cloud__tag").forEach((b) => b.classList.remove("tag-cloud__tag--active"));
        btn.classList.add("tag-cloud__tag--active");
        document.getElementById("searchInput").value = tag;
        searchQuery = tag.toLowerCase();
      }
      currentPage = 1;
      applyFilters();
    });
  });
}

/**
 * Render category list in sidebar
 */
function renderCategoryChart() {
  const chart = document.getElementById("categoryChart");
  if (!chart) return;

  const counts = getCategoryCounts();

  chart.innerHTML = Object.entries(counts).map(([name, count]) => `
    <button type="button" class="category-list__item" data-category="${name}">
      <span>${name}</span>
      <span class="category-list__count">${count}</span>
    </button>
  `).join("");

  chart.querySelectorAll(".category-list__item").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      currentPage = 1;
      document.querySelectorAll(".control-panel__filter-btn").forEach((b) => {
        b.classList.toggle("control-panel__filter-btn--active", b.dataset.category === activeCategory);
      });
      applyFilters();
    });
  });
}

/**
 * Render editor's pick widget
 */
function renderEditorsPick() {
  const container = document.getElementById("editorsPick");
  if (!container) return;

  const pick = BLOG_POSTS[1];
  container.innerHTML = `
    <a href="post-detail?slug=${pick.slug}" class="editors-pick">
      <img class="editors-pick__thumb" src="${pick.image}" alt="${pick.title}" loading="lazy">
      <div>
        <div class="editors-pick__title">${pick.title}</div>
        <div class="editors-pick__meta">${pick.date}</div>
      </div>
    </a>
  `;
}

/**
 * Initialize toolbar controls
 */
function initToolbar() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      activeTag = "";
      document.querySelectorAll(".tag-cloud__tag--active").forEach((t) => t.classList.remove("tag-cloud__tag--active"));
      currentPage = 1;
      applyFilters();
    });
  }

  const sortSelect = document.getElementById("sortSelect");
  sortSelect?.addEventListener("change", (e) => {
    sortOrder = e.target.value;
    currentPage = 1;
    applyFilters();
  });

  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");

  gridBtn?.addEventListener("click", () => setViewMode("grid", gridBtn, listBtn));
  listBtn?.addEventListener("click", () => setViewMode("list", gridBtn, listBtn));
}

/**
 * Switch grid/list view mode
 * @param {string} mode - View mode
 * @param {HTMLElement} gridBtn - Grid button
 * @param {HTMLElement} listBtn - List button
 */
function setViewMode(mode, gridBtn, listBtn) {
  viewMode = mode;
  gridBtn.classList.toggle("view-toggle__btn--active", mode === "grid");
  listBtn.classList.toggle("view-toggle__btn--active", mode === "list");
  gridBtn.setAttribute("aria-pressed", mode === "grid");
  listBtn.setAttribute("aria-pressed", mode === "list");
  applyFilters();
}

/**
 * Render category filter buttons
 */
function renderFilterButtons() {
  const container = document.getElementById("filterButtons");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(
    (cat) => `
      <button class="control-panel__filter-btn${cat === "All" ? " control-panel__filter-btn--active" : ""}" data-category="${cat}">${cat}</button>
    `
  ).join("");

  container.querySelectorAll(".control-panel__filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      currentPage = 1;
      container.querySelectorAll(".control-panel__filter-btn").forEach((b) => {
        b.classList.toggle("control-panel__filter-btn--active", b === btn);
      });
      applyFilters();
    });
  });
}

/**
 * Sort posts array
 * @param {Array<Object>} posts - Posts to sort
 * @returns {Array<Object>} Sorted posts
 */
function sortPosts(posts) {
  const sorted = [...posts];
  if (sortOrder === "newest") {
    sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortOrder === "oldest") {
    sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  return sorted;
}

/**
 * Filter posts and render grid
 */
function applyFilters() {
  const grid = document.getElementById("postsGrid");
  const featured = document.getElementById("featuredPost");
  const resultCount = document.getElementById("resultCount");
  if (!grid) return;

  let filtered = BLOG_POSTS.filter((post) => {
    const matchCategory = activeCategory === "All" || post.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery) ||
      post.keywords.some((kw) => kw.toLowerCase().includes(searchQuery)) ||
      post.excerpt.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  filtered = sortPosts(filtered);

  if (resultCount) {
    resultCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${BLOG_POSTS.length}</strong> articles`;
  }

  const showFeatured = currentPage === 1 && !searchQuery && activeCategory === "All" && filtered.length > 0;
  if (featured) {
    featured.innerHTML = showFeatured ? createFeaturedPostHTML(filtered[0]) : "";
    if (showFeatured) filtered = filtered.slice(1);
  }

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE) || 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = filtered.slice(start, start + POSTS_PER_PAGE);

  grid.className = viewMode === "list" ? "posts-grid posts-grid--list" : "posts-grid";

  if (pagePosts.length === 0) {
    grid.innerHTML = `<p class="posts-grid__empty">No articles found matching your criteria.</p>`;
  } else {
    grid.innerHTML = pagePosts.map((post) => {
      return viewMode === "list" ? createBlogCardHTML(post, "list") : createBlogCardHTML(post);
    }).join("");
  }

  renderPagination(totalPages);
}

/**
 * Render pagination controls
 * @param {number} totalPages - Total pages
 */
function renderPagination(totalPages) {
  const container = document.getElementById("pagination");
  if (!container) return;

  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  let html = `<button class="pagination__btn" data-page="prev" ${currentPage === 1 ? "disabled" : ""}>← Previous</button>`;

  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="pagination__btn${i === currentPage ? " pagination__btn--active" : ""}" data-page="${i}">${i}</button>`;
  }

  html += `<button class="pagination__btn" data-page="next" ${currentPage === totalPages ? "disabled" : ""}>Next →</button>`;

  container.innerHTML = html;

  container.querySelectorAll(".pagination__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = btn.dataset.page;
      if (page === "prev" && currentPage > 1) currentPage--;
      else if (page === "next" && currentPage < totalPages) currentPage++;
      else if (!isNaN(Number(page))) currentPage = Number(page);
      applyFilters();
      document.querySelector(".blog-main")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

document.addEventListener("DOMContentLoaded", initBlogPage);
