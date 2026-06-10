/**
 * AJiusBlog — Component loader & shared utilities
 */

/**
 * Load an HTML component into a target element
 * @param {string} componentPath - Path to the component HTML file
 * @param {string} targetId - DOM id of the insertion target
 * @returns {Promise<void>}
 */
async function loadComponent(componentPath, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const response = await fetch(componentPath);
    if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
    const html = await response.text();
    target.innerHTML = html;
  } catch (error) {
    console.error(`Component load error: ${componentPath}`, error);
  }
}

/**
 * Load all shared layout components (header, footer, back-to-top)
 * @returns {Promise<void>}
 */
async function loadLayoutComponents() {
  await Promise.all([
    loadComponent("components/header.html", "site-header"),
    loadComponent("components/footer.html", "site-footer"),
    loadComponent("components/back-to-top.html", "back-to-top")
  ]);

  initNavigation();
  initBackToTop();
  initHeaderScroll();
  highlightActiveNavLink();
}

/**
 * Initialize mobile hamburger navigation
 */
function initNavigation() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  const overlay = document.getElementById("navOverlay");

  if (!toggle || !nav) return;

  /** Close the mobile navigation menu */
  function closeNav() {
    toggle.classList.remove("site-header__toggle--open");
    nav.classList.remove("site-nav--open");
    overlay?.classList.remove("nav-overlay--visible");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("site-nav--open");
    toggle.classList.toggle("site-header__toggle--open", isOpen);
    overlay?.classList.toggle("nav-overlay--visible", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  overlay?.addEventListener("click", closeNav);

  nav.querySelectorAll(".site-nav__link").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

/**
 * Initialize back-to-top button with fade animation
 */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("back-to-top--visible", window.scrollY > 400);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * Toggle header overlay / solid styles on scroll (dark hero pages)
 */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const hasDarkHero = document.querySelector(".hero, .page-hero--blog");
  if (hasDarkHero) {
    header.classList.add("site-header--overlay");
    document.body.classList.add("body--header-overlay");
  }

  /** @param {number} scrollY */
  function updateHeader(scrollY) {
    header.classList.toggle("site-header--scrolled", scrollY > 20);
  }

  updateHeader(window.scrollY);
  window.addEventListener("scroll", () => updateHeader(window.scrollY), { passive: true });
}

/**
 * Highlight the active navigation link based on current page
 */
function highlightActiveNavLink() {
  const page = document.body.dataset.page;
  if (!page) return;

  document.querySelectorAll(".site-nav__link").forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("site-nav__link--active");
    }
  });
}

/**
 * Get URL query parameter value
 * @param {string} param - Parameter name
 * @returns {string|null} Parameter value
 */
function getQueryParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

document.addEventListener("DOMContentLoaded", loadLayoutComponents);
