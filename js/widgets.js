/**
 * AJiusBlog — Shared widget interactions & utilities
 */

/**
 * Animate numeric counters when elements scroll into view
 * @param {string} selector - CSS selector for counter elements
 */
function initCounters(selector = "[data-count]") {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        const duration = 1200;
        const start = performance.now();

        /** @param {number} now */
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Initialize FAQ accordion toggles
 * @param {string} containerId - Accordion container element id
 */
function initAccordion(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.querySelectorAll(".accordion__trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion__item");
      const isOpen = item.classList.contains("accordion__item--open");

      container.querySelectorAll(".accordion__item--open").forEach((open) => {
        open.classList.remove("accordion__item--open");
        open.querySelector(".accordion__trigger").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("accordion__item--open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Initialize newsletter form handlers
 * @param {string} formSelector - Form CSS selector
 */
function initNewsletterForms(formSelector = ".newsletter-widget__form, .newsletter-cta__form") {
  document.querySelectorAll(formSelector).forEach((form) => {
    if (form.dataset.bound) return;
    form.dataset.bound = "true";

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type=email]");
      if (!input || !input.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        input?.focus();
        return;
      }

      form.reset();
      const success = form.parentElement.querySelector(".newsletter-widget__success")
        || form.parentElement.querySelector(".newsletter-cta__success");
      if (success) {
        success.classList.add("newsletter-widget__success--visible");
        setTimeout(() => success.classList.remove("newsletter-widget__success--visible"), 4000);
      } else {
        showToast("Thanks for subscribing!");
      }
    });
  });
}

/**
 * Show a temporary toast notification
 * @param {string} message - Toast message text
 */
function showToast(message) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("toast--visible");
  setTimeout(() => toast.classList.remove("toast--visible"), 3000);
}

/** @type {IntersectionObserver|null} */
let revealObserver = null;

/**
 * Check if element is in viewport
 * @param {Element} el - DOM element
 * @returns {boolean}
 */
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

/**
 * Initialize or refresh scroll-reveal on elements
 * @param {string} selector - Elements to reveal
 */
function refreshScrollReveal(selector = ".reveal--animate") {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
  }

  document.querySelectorAll(selector).forEach((el) => {
    if (el.classList.contains("reveal--visible")) return;
    if (isInViewport(el)) {
      el.classList.add("reveal--visible");
    } else {
      revealObserver.observe(el);
    }
  });
}

/**
 * Initialize share button copy/link actions
 * @param {string} url - Page URL to share
 * @param {string} title - Page title
 */
function initShareButtons(url, title) {
  document.querySelectorAll(".share-widget__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.share;

      if (type === "twitter") {
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          "_blank",
          "noopener,noreferrer,width=550,height=420"
        );
      } else if (type === "linkedin") {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank",
          "noopener,noreferrer,width=550,height=420"
        );
      } else if (type === "copy") {
        navigator.clipboard?.writeText(url).then(() => showToast("Link copied!"));
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNewsletterForms();
  refreshScrollReveal();
});

/**
 * Call after dynamic content is injected
 */
function onContentReady() {
  refreshScrollReveal();
  initNewsletterForms();
  initCounters("[data-count]");
}
