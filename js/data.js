/**
 * AJiusBlog — Blog post metadata (body content loaded from articles-content.js on detail page)
 */

/** @type {Array<Object>} Blog post collection */
const BLOG_POSTS = [
  {
    id: 1,
    slug: "top-5-ai-productivity-tools-2026",
    title: "Top 5 AI Productivity Tools in 2026",
    category: "Platform Guide",
    date: "2026-02-15",
    readTime: 12,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    excerpt: "I tested dozens of AI tools so you don't have to. Five actually earned a permanent spot in my daily workflow — here's why, with honest trade-offs.",
    keywords: ["AI", "productivity", "tools", "automation", "2026"],
    relatedProducts: ["notion-ai", "github-copilot"]
  },
  {
    id: 2,
    slug: "ultimate-ergonomic-keyboard-review",
    title: "The Ultimate Ergonomic Keyboard Review for Developers",
    category: "Product Review",
    date: "2025-12-20",
    readTime: 11,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
    excerpt: "Twelve keyboards, one buzzing wrist, and the board that finally fixed my setup. A friend's-at-midnight honest review — not a spec sheet.",
    keywords: ["keyboard", "ergonomic", "developer", "review", "hardware"],
    relatedProducts: ["keychron-q1-pro"]
  },
  {
    id: 3,
    slug: "best-cloud-hosting-jamstack-blogs",
    title: "Best Cloud Hosting Platforms for Jamstack Blogs",
    category: "Platform Guide",
    date: "2025-10-08",
    readTime: 10,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    excerpt: "I cut hosting from $24/month to zero and load time from 3s to under half a second. Here's how Cloudflare, Vercel, and Netlify compare for real blogs.",
    keywords: ["hosting", "jamstack", "netlify", "vercel", "cloudflare"],
    relatedProducts: []
  },
  {
    id: 4,
    slug: "notion-vs-obsidian-knowledge-base",
    title: "Notion vs Obsidian: Which Knowledge Base Wins in 2025?",
    category: "Platform Guide",
    date: "2025-09-14",
    readTime: 11,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    excerpt: "I used both for eighteen months before admitting I needed two tools, not one. The comparison I wish someone had sent me on day one.",
    keywords: ["notion", "obsidian", "knowledge base", "PKM", "comparison"],
    relatedProducts: ["notion-ai"]
  },
  {
    id: 5,
    slug: "sony-wh1000xm5-developer-companion",
    title: "Sony WH-1000XM5: A Developer's Daily Companion",
    category: "Product Review",
    date: "2025-08-22",
    readTime: 9,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
    excerpt: "Construction at 7am, client call at 7:30. These headphones turned a ruined morning into a normal Tuesday. Worth $399? Let's talk honestly.",
    keywords: ["headphones", "sony", "noise canceling", "review", "audio"],
    relatedProducts: ["sony-wh1000xm5"]
  },
  {
    id: 6,
    slug: "building-personal-website-astro-cloudflare",
    title: "Building a Personal Website with Astro and Cloudflare Pages",
    category: "Platform Guide",
    date: "2025-07-05",
    readTime: 12,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    excerpt: "Four failed site rebuilds taught me what actually matters. Astro + Cloudflare Pages is the stack I'd pick today — one afternoon from zero to live.",
    keywords: ["astro", "cloudflare", "personal website", "tutorial", "jamstack"],
    relatedProducts: []
  },
  {
    id: 7,
    slug: "best-standing-desks-home-office",
    title: "Best Standing Desks for Home Office Setup",
    category: "Product Review",
    date: "2025-05-18",
    readTime: 10,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09ae705?w=800&q=80",
    excerpt: "One wobbly converter in the closet, one desk I use daily. Six standing desks tested — what I'd buy again and what I'd skip.",
    keywords: ["standing desk", "home office", "ergonomic", "furniture", "review"],
    relatedProducts: ["flexispot-e7"]
  },
  {
    id: 8,
    slug: "web-development-trends-2025",
    title: "Web Development Trends Shaping 2025",
    category: "Tech Trends",
    date: "2025-04-02",
    readTime: 10,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    excerpt: "Ignore Twitter hype cycles. Here's what's actually changing how teams ship — RSC, edge middleware, TypeScript defaults, and AI with guardrails.",
    keywords: ["web development", "trends", "2025", "react", "edge"],
    relatedProducts: ["github-copilot"]
  },
  {
    id: 9,
    slug: "mechanical-keyboard-buying-guide",
    title: "Mechanical Keyboard Buying Guide for Beginners",
    category: "Product Review",
    date: "2025-03-10",
    readTime: 11,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80",
    excerpt: "My first mech keyboard got me side-eyed in a coworking space. This guide helps you skip that mistake and buy once, happily.",
    keywords: ["mechanical keyboard", "buying guide", "switches", "beginner"],
    relatedProducts: ["keychron-q1-pro"]
  },
  {
    id: 10,
    slug: "remote-work-essential-tools-2025",
    title: "Remote Work Essential Tools for 2025",
    category: "Tech Trends",
    date: "2025-02-20",
    readTime: 10,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    excerpt: "Three years fully remote — these are the tools that survived the purge when I deleted fifteen 'productivity' apps I never opened.",
    keywords: ["remote work", "tools", "productivity", "2025", "collaboration"],
    relatedProducts: ["notion-ai"]
  }
];

/**
 * Attach full HTML body content when articles-content.js is loaded
 */
if (typeof ARTICLE_CONTENTS !== "undefined") {
  BLOG_POSTS.forEach((post) => {
    post.content = ARTICLE_CONTENTS[post.slug] || "";
  });
}

/** @type {Array<Object>} Product collection */
const PRODUCTS = [
  {
    id: "keychron-q1-pro",
    name: "Keychron Q1 Pro",
    brand: "Keychron",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    summary: "Premium wireless mechanical keyboard with hot-swappable switches and aluminum build.",
    rating: 4.5,
    pros: ["Excellent build quality", "Hot-swappable switches", "Wireless + wired modes", "QMK/VIA support"],
    cons: ["Heavy at 1.7kg", "Premium price point", "Learning curve for beginners"],
    affiliateUrl: "https://www.amazon.com",
    affiliateLabel: "Check Price on Amazon"
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80",
    summary: "Industry-leading noise cancellation with exceptional comfort for all-day wear.",
    rating: 5,
    pros: ["Best-in-class ANC", "30-hour battery life", "Multipoint Bluetooth", "Ultra comfortable"],
    cons: ["No fold-flat design", "Premium pricing", "Non-removable ear pads"],
    affiliateUrl: "https://www.amazon.com",
    affiliateLabel: "Check Price on Amazon"
  },
  {
    id: "flexispot-e7",
    name: "FlexiSpot E7 Pro",
    brand: "FlexiSpot",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09ae705?w=600&q=80",
    summary: "Dual-motor electric standing desk with exceptional stability and memory presets.",
    rating: 4.5,
    pros: ["Rock-solid stability", "Dual motor system", "4 memory presets", "Great value"],
    cons: ["Assembly required", "Limited desktop options", "Motor audible at max load"],
    affiliateUrl: "https://www.amazon.com",
    affiliateLabel: "Check Price on Amazon"
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    brand: "Notion",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
    summary: "AI-powered workspace that helps you write, summarize, and organize effortlessly.",
    rating: 4,
    pros: ["Seamless integration", "Versatile AI features", "Team collaboration", "Template ecosystem"],
    cons: ["Requires Notion subscription", "Offline limitations", "Can feel slow with large databases"],
    affiliateUrl: "https://www.notion.so",
    affiliateLabel: "Visit Website"
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    brand: "GitHub",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
    summary: "AI pair programmer that suggests code and entire functions in real-time.",
    rating: 4.5,
    pros: ["Excellent code suggestions", "Multi-language support", "IDE integration", "Context-aware"],
    cons: ["Monthly subscription", "Occasional inaccurate suggestions", "Privacy considerations"],
    affiliateUrl: "https://github.com/features/copilot",
    affiliateLabel: "Visit Website"
  },
  {
    id: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
    summary: "The ultimate productivity mouse with MagSpeed scrolling and multi-device connectivity.",
    rating: 5,
    pros: ["MagSpeed electromagnetic scroll", "Ergonomic sculpted design", "Multi-device switching", "70-day battery"],
    cons: ["Right-hand only", "Not ideal for gaming", "Premium price"],
    affiliateUrl: "https://www.amazon.com",
    affiliateLabel: "Check Price on Amazon"
  }
];

/** @type {Array<string>} Available blog categories */
const CATEGORIES = ["All", "Platform Guide", "Product Review", "Tech Trends"];

/**
 * Get category badge CSS class
 * @param {string} category - Post category name
 * @returns {string} BEM modifier class
 */
function getCategoryBadgeClass(category) {
  const map = {
    "Platform Guide": "badge--platform",
    "Product Review": "badge--product",
    "Tech Trends": "badge--tech"
  };
  return map[category] || "badge--platform";
}

/**
 * Render star rating HTML
 * @param {number} rating - Rating value (0-5)
 * @returns {string} Star characters
 */
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

/**
 * Find a blog post by slug
 * @param {string} slug - Post URL slug
 * @returns {Object|undefined} Matching post
 */
function getPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/**
 * Find a product by ID
 * @param {string} id - Product identifier
 * @returns {Object|undefined} Matching product
 */
function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

/**
 * Create a blog card HTML string
 * @param {Object} post - Blog post data
 * @param {string} [variant] - Card variant: default, wide, list
 * @returns {string} Blog card markup
 */
function createBlogCardHTML(post, variant = "default") {
  const badgeClass = getCategoryBadgeClass(post.category);
  const variantClass =
    variant === "wide" ? " blog-card--wide" : variant === "list" ? " blog-card--list" : "";

  return `
    <article class="blog-card${variantClass}" data-category="${post.category}" data-keywords="${post.keywords.join(",")}" data-title="${post.title.toLowerCase()}">
      <a href="post-detail?slug=${post.slug}" class="blog-card__image-wrap">
        <img class="blog-card__image" src="${post.image}" alt="${post.title}" loading="lazy">
      </a>
      <div class="blog-card__body">
        <div class="blog-card__meta">
          <span class="badge ${badgeClass}">${post.category}</span>
          <time class="blog-card__date" datetime="${post.date}">${post.date}</time>
        </div>
        <h3 class="blog-card__title">
          <a href="post-detail?slug=${post.slug}">${post.title}</a>
        </h3>
        <p class="blog-card__excerpt">${post.excerpt}</p>
        <a href="post-detail?slug=${post.slug}" class="blog-card__link">
          Read More →
        </a>
      </div>
    </article>
  `;
}

/**
 * Create featured post hero card HTML
 * @param {Object} post - Blog post data
 * @returns {string} Featured post markup
 */
function createFeaturedPostHTML(post) {
  return `
    <a href="post-detail?slug=${post.slug}" class="featured-post">
      <div class="featured-post__image-wrap">
        <img class="featured-post__image" src="${post.image}" alt="${post.title}" loading="lazy">
        <span class="featured-post__badge">${post.category}</span>
      </div>
      <div class="featured-post__body">
        <span class="featured-post__label">Editor's Pick</span>
        <h2 class="featured-post__title">${post.title}</h2>
        <p class="featured-post__excerpt">${post.excerpt}</p>
        <div class="featured-post__meta">
          <time datetime="${post.date}">${post.date}</time>
          <span>By ${post.author}</span>
        </div>
        <span class="featured-post__cta">Read Full Article →</span>
      </div>
    </a>
  `;
}

/**
 * Get keyword frequency map for tag cloud
 * @returns {Array<{tag: string, count: number}>}
 */
function getPopularTags(limit = 12) {
  const freq = {};
  BLOG_POSTS.forEach((post) => {
    post.keywords.forEach((kw) => {
      freq[kw] = (freq[kw] || 0) + 1;
    });
  });
  return Object.entries(freq)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

/**
 * Get post count per category
 * @returns {Record<string, number>}
 */
function getCategoryCounts() {
  const counts = {};
  BLOG_POSTS.forEach((post) => {
    counts[post.category] = (counts[post.category] || 0) + 1;
  });
  return counts;
}

/**
 * Create a product card HTML string
 * @param {Object} product - Product data
 * @returns {string} Product card markup
 */
function createProductCardHTML(product) {
  const prosList = product.pros.map((p) => `<li>${p}</li>`).join("");
  const consList = product.cons.map((c) => `<li>${c}</li>`).join("");

  return `
    <article class="product-card">
      <div class="product-card__image-wrap">
        <img class="product-card__image" src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-card__body">
        <span class="product-card__brand">${product.brand}</span>
        <h3 class="product-card__title">${product.name}</h3>
        <p class="product-card__summary">${product.summary}</p>
        <div class="product-card__rating" aria-label="Rating: ${product.rating} out of 5">${renderStars(product.rating)}</div>
        <div class="product-card__pros-cons">
          <div class="product-card__pros">
            <div class="product-card__pros-title">Pros</div>
            <ul class="product-card__list">${prosList}</ul>
          </div>
          <div class="product-card__cons">
            <div class="product-card__cons-title">Cons</div>
            <ul class="product-card__list">${consList}</ul>
          </div>
        </div>
        <a href="${product.affiliateUrl}" class="btn btn--affiliate" target="_blank" rel="noopener noreferrer">
          ${product.affiliateLabel}
        </a>
      </div>
    </article>
  `;
}
