/**
 * AJiusBlog — Home, Products & About page initializers
 */

/** @type {Record<string, {type: string}>} */
const PRODUCT_FILTERS = {
  "keychron-q1-pro": { type: "hardware" },
  "sony-wh1000xm5": { type: "hardware" },
  "flexispot-e7": { type: "hardware" },
  "logitech-mx-master-3s": { type: "hardware" },
  "notion-ai": { type: "software" },
  "github-copilot": { type: "software" }
};

/** @type {string} Active product filter */
let activeProductFilter = "all";

/**
 * Render home page sections
 */
function initHomePage() {
  renderCategoryCards();
  renderFeaturedSpotlight();

  const latestGrid = document.getElementById("latestPosts");
  if (latestGrid) {
    latestGrid.innerHTML = BLOG_POSTS.slice(1, 4).map((post) => createBlogCardHTML(post)).join("");
  }

  const featuredGrid = document.getElementById("featuredProducts");
  if (featuredGrid) {
    featuredGrid.innerHTML = PRODUCTS.slice(0, 4).map((p) => createProductCardHTML(p)).join("");
  }

  onContentReady();
}

/**
 * Render category navigation cards on home page
 */
function renderCategoryCards() {
  const container = document.getElementById("categoryCards");
  if (!container) return;

  const categories = [
    { name: "Platform Guide", icon: "🚀", color: "#2563eb", slug: "Platform+Guide" },
    { name: "Product Review", icon: "📦", color: "#16a34a", slug: "Product+Review" },
    { name: "Tech Trends", icon: "📈", color: "#d97706", slug: "Tech+Trends" }
  ];

  const counts = getCategoryCounts();

  container.innerHTML = categories.map((cat, i) => `
    <a href="blog?category=${cat.slug}" class="category-card reveal--animate reveal--delay-${i + 1}" style="--cat-color: ${cat.color}">
      <div class="category-card__icon">${cat.icon}</div>
      <h3 class="category-card__title">${cat.name}</h3>
      <p class="category-card__count">${counts[cat.name] || 0} articles</p>
      <span class="category-card__arrow">→</span>
    </a>
  `).join("");
}

/**
 * Render featured post spotlight on home page
 */
function renderFeaturedSpotlight() {
  const container = document.getElementById("featuredSpotlight");
  if (!container) return;
  container.innerHTML = createFeaturedPostHTML(BLOG_POSTS[0]);
}

/**
 * Render products page with spotlight and filters
 */
function initProductsPage() {
  renderProductSpotlight();
  renderProductsGrid();
  initProductFilters();
  onContentReady();
}

/**
 * Render top product spotlight
 */
function renderProductSpotlight() {
  const container = document.getElementById("productSpotlight");
  if (!container) return;

  const star = PRODUCTS.find((p) => p.rating === 5) || PRODUCTS[0];
  container.innerHTML = `
    <div class="product-spotlight">
      <div>
        <span class="product-spotlight__label">Top Rated Pick</span>
        <h2 class="product-spotlight__title">${star.name}</h2>
        <div class="product-spotlight__rating">${renderStars(star.rating)}</div>
        <p class="product-spotlight__desc">${star.summary} We've used this daily for months — it's the one we'd buy again without hesitation.</p>
        <a href="${star.affiliateUrl}" class="btn btn--affiliate" style="width:auto;display:inline-flex;" target="_blank" rel="noopener noreferrer">${star.affiliateLabel}</a>
      </div>
      <img class="product-spotlight__image" src="${star.image}" alt="${star.name}" loading="lazy">
    </div>
  `;
}

/**
 * Filter and render product grid
 */
function renderProductsGrid() {
  const grid = document.getElementById("productsGrid");
  const countEl = document.getElementById("productCount");
  if (!grid) return;

  let filtered = [...PRODUCTS];

  if (activeProductFilter === "hardware") {
    filtered = filtered.filter((p) => PRODUCT_FILTERS[p.id]?.type === "hardware");
  } else if (activeProductFilter === "software") {
    filtered = filtered.filter((p) => PRODUCT_FILTERS[p.id]?.type === "software");
  } else if (activeProductFilter === "top-rated") {
    filtered = filtered.filter((p) => p.rating >= 4.5);
  }

  if (countEl) {
    countEl.innerHTML = `Showing <strong>${filtered.length}</strong> products`;
  }

  grid.innerHTML = filtered.map((p) => createProductCardHTML(p)).join("");
}

/**
 * Initialize product filter buttons
 */
function initProductFilters() {
  document.querySelectorAll(".products-filter__btn").forEach((btn) => {
    btn.addEventListener("click", () => setProductFilter(btn.dataset.filter));
  });

  document.querySelectorAll("[data-filter-link]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setProductFilter(link.dataset.filterLink);
      document.getElementById("productsGrid")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/**
 * Apply product filter and update UI
 * @param {string} filter - Filter key
 */
function setProductFilter(filter) {
  activeProductFilter = filter;
  document.querySelectorAll(".products-filter__btn").forEach((b) => {
    b.classList.toggle("products-filter__btn--active", b.dataset.filter === filter);
  });
  renderProductsGrid();
}

/**
 * Initialize contact form validation
 */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const fields = [
      { id: "contactName", errorId: "nameError", message: "Name is required" },
      { id: "contactEmail", errorId: "emailError", message: "Valid email is required", validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id: "contactSubject", errorId: "subjectError", message: "Subject is required" },
      { id: "contactMessage", errorId: "messageError", message: "Message is required" }
    ];

    fields.forEach(({ id, errorId, message, validate }) => {
      const input = document.getElementById(id);
      const error = document.getElementById(errorId);
      const value = input.value.trim();
      const valid = value && (!validate || validate(value));

      input.classList.toggle("form-group__input--error", !valid);
      input.classList.toggle("form-group__textarea--error", !valid);
      error.classList.toggle("form-group__error--visible", !valid);
      error.textContent = message;
      if (!valid) isValid = false;
    });

    if (isValid) {
      form.reset();
      document.getElementById("formSuccess").classList.add("form-success--visible");
      setTimeout(() => {
        document.getElementById("formSuccess").classList.remove("form-success--visible");
      }, 5000);
    }
  });
}

/**
 * Initialize about page animated stats
 */
function initAboutPage() {
  document.querySelectorAll(".about__stat-number").forEach((el, i) => {
    const values = [BLOG_POSTS.length, PRODUCTS.length, Object.keys(getCategoryCounts()).length];
    el.dataset.count = values[i];
    el.textContent = values[i];
  });
  initCounters(".about__stat-number");
  initAccordion("faqAccordion");
}

document.addEventListener("DOMContentLoaded", () => {
  initHomePage();
  initProductsPage();
  initContactForm();
  initAboutPage();
});
