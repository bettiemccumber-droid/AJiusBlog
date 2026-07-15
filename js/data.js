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
  },
  {
    id: 11,
    slug: "discover-unique-handmade-gifts-etsy-today",
    title: "Discover Unique Handmade Gifts on Etsy Today",
    category: "Product Review",
    date: "2026-06-27",
    readTime: 12,
    author: "Alex Jius",
    image: "https://i.etsystatic.com/39701489/r/il/3c1865/5403598599/il_510x680.5403598599_asdu.jpg",
    excerpt: "My sister's birthday was three days away and every mall gift felt interchangeable. One late-night scroll through Etsy changed how I think about giving.",
    keywords: ["Etsy", "handmade gifts", "artisan", "shopping", "unique"],
    relatedProducts: []
  },
  {
    id: 12,
    slug: "etsy-finds-one-of-a-kind-vintage-treasures",
    title: "Etsy Finds: One-of-a-Kind Vintage Treasures Await",
    category: "Product Review",
    date: "2026-07-03",
    readTime: 12,
    author: "Alex Jius",
    image: "https://i.etsystatic.com/41617827/r/il/efc306/7985918505/il_510x680.7985918505_45j3.jpg",
    excerpt: "I furnished half my apartment from flea markets and Etsy vintage sellers. The pieces with stories behind them are the ones guests actually ask about.",
    keywords: ["Etsy", "vintage", "antiques", "home decor", "collectibles"],
    relatedProducts: []
  },
  {
    id: 13,
    slug: "shop-latest-victorias-secret-lingerie-collection",
    title: "Shop the Latest Victoria's Secret Lingerie Collection",
    category: "Product Review",
    date: "2026-06-29",
    readTime: 12,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1584061554353-f8c337f5dbb9?w=800&q=80",
    excerpt: "A bridesmaid fitting exposed every bra that looked fine flat and failed by hour four. Here's how I rebuilt my drawer — fit, fabric, and travel.",
    keywords: ["Victoria's Secret", "lingerie", "fashion", "intimates", "style"],
    relatedProducts: []
  },
  {
    id: 14,
    slug: "victorias-secret-embrace-your-inner-angel",
    title: "Victoria's Secret: Embrace Your Inner Angel",
    category: "Product Review",
    date: "2026-07-04",
    readTime: 12,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1766056278825-55168658f120?w=800&q=80",
    excerpt: "My cousin practiced the Angel walk in our hallway mirror. Years later, Victoria's Secret means something quieter — and more useful.",
    keywords: ["Victoria's Secret", "Angel", "lingerie", "confidence", "fashion"],
    relatedProducts: []
  },
  {
    id: 15,
    slug: "murci-modern-fashion-everyday-elegance",
    title: "Murci: Where Modern Fashion Meets Everyday Elegance",
    category: "Product Review",
    date: "2026-06-29",
    readTime: 12,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1747396206869-75ea57b325ce?w=800&q=80",
    excerpt: "One Murci midi dress survived client lunch, school pickup, and Friday drinks in the same week. That's when my closet gap finally closed.",
    keywords: ["Murci", "fashion", "womenswear", "style", "elegance"],
    relatedProducts: []
  },
  {
    id: 16,
    slug: "discover-new-murci-collection-this-season",
    title: "Discover the New Murci Collection for This Season",
    category: "Product Review",
    date: "2026-07-05",
    readTime: 12,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1767972463565-5a9387059b01?w=800&q=80",
    excerpt: "Same tired linen shirt, same summer dread — until one sage slip dress handled barbecue, rooftop bar, and nice dinner without a wardrobe crisis.",
    keywords: ["Murci", "new collection", "seasonal fashion", "dresses", "UK fashion"],
    relatedProducts: []
  },
  {
    id: 17,
    slug: "mint-julep-boutique-southern-charm-modern-style",
    title: "The Mint Julep Boutique: Southern Charm, Modern Style",
    category: "Product Review",
    date: "2026-07-01",
    readTime: 12,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1777713272516-e7b2216fe15e?w=800&q=80",
    excerpt: "Lena texted me a Mint Julep Boutique link at 11pm: Southern charm without the costume. Four orders later, I believe her.",
    keywords: ["The Mint Julep Boutique", "southern style", "boutique", "dresses", "fashion"],
    relatedProducts: []
  },
  {
    id: 18,
    slug: "21vek-by-one-stop-shop-everything",
    title: "21vek BY: Your One-Stop Shop for Everything",
    category: "Product Review",
    date: "2026-07-01",
    readTime: 12,
    author: "Alex Jius",
    image: "https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/8221/721/023_almaz_luks_06_ec06c93d08090d8e3f748634105953c6.jpg",
    excerpt: "I interviewed my colleague Katya in Minsk about how one website handles blenders, headphones, sunscreen, and her mum's birthday — in one Saturday cart.",
    keywords: ["21vek BY", "Belarus", "online shopping", "electronics", "home"],
    relatedProducts: []
  },
  {
    id: 19,
    slug: "shop-electronics-beauty-more-21vek-by",
    title: "Shop Electronics, Beauty & More at 21vek BY",
    category: "Product Review",
    date: "2026-07-10",
    readTime: 12,
    author: "Alex Jius",
    image: "https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/9292/875/airpods4mxp63_apple_9292875_6bd8407bf6d5ceee8602e3fad4c3511f.jpg",
    excerpt: "Katya's 21vek BY cart mixed earbuds, face serum, and a coffee grinder. One checkout — and I stopped assuming general retailers are mediocre.",
    keywords: ["21vek BY", "electronics", "beauty", "appliances", "shopping"],
    relatedProducts: []
  },
  {
    id: 20,
    slug: "miele-engineered-lifetime-performance",
    title: "Miele: Engineered for a Lifetime of Performance",
    category: "Product Review",
    date: "2026-07-01",
    readTime: 12,
    author: "Alex Jius",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Miele_Waschmaschine_01_%28fcm%29.jpg/960px-Miele_Waschmaschine_01_%28fcm%29.jpg",
    excerpt: "Our dishwasher died mid-dinner party. The repair guy's Sunday advice — and the cost math — sent me down the Miele rabbit hole.",
    keywords: ["Miele", "appliances", "kitchen", "durability", "premium"],
    relatedProducts: []
  },
  {
    id: 21,
    slug: "miele-uk-elevate-kitchen-luxury",
    title: "Miele UK: Elevate Your Kitchen with Luxury",
    category: "Product Review",
    date: "2026-07-10",
    readTime: 12,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
    excerpt: "March countertops, May showroom, June move-in — six months later, our Miele UK kitchen is the only renovation decision we still feel completely right about.",
    keywords: ["Miele UK", "luxury kitchen", "ovens", "dishwashers", "home"],
    relatedProducts: []
  },
  {
    id: 22,
    slug: "bonmarche-uk-classic-style-modern-woman",
    title: "Bonmarche UK: Classic Style for the Modern Woman",
    category: "Product Review",
    date: "2026-07-02",
    readTime: 12,
    author: "Alex Jius",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    excerpt: "My mum sent a Bonmarche UK shift dress link. I ordered burgundy instead of navy — then called her after the third wear to admit she was right.",
    keywords: ["Bonmarche", "UK fashion", "womenswear", "classic style", "plus size"],
    relatedProducts: []
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
 * Return blog posts sorted by date (newest first)
 * @returns {Array<Object>}
 */
function getPostsByNewest() {
  return [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date) || b.id - a.id);
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
