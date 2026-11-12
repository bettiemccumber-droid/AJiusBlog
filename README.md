# AJiusBlog

静态博客。已有文章在 `js/data.js`（`BLOG_POSTS`）和 `js/articles-content.js`（`ARTICLE_CONTENTS`）。详情页地址是 `/post-detail?slug=...`。

zjads 通过接口发文。新文章写到 Vercel Blob 的 `published-posts.json`，发布后列表和详情立刻可读，不用为每一篇重新部署，也不会改写 `data.js` 或 `articles-content.js`。

## 环境变量

在 Vercel 项目的 Environment Variables 里配置：

- `PUBLISH_TOKEN`：调用 `POST /api/posts` 时放在请求头 `Authorization: Bearer <PUBLISH_TOKEN>`。未配置或密钥不对时接口返回 401。

另外创建一个 **Private** Blob store，并连接到这个项目。Vercel 会自动注入 `BLOB_READ_WRITE_TOKEN` 或 `BLOB_STORE_ID`。必须用 Private store：公开 store 在覆盖同一个 JSON 后，读取最多会看到约一分钟前的内容，新文章就不能马上出现。

## zjads 调用地址

```
POST https://www.ajiusblogs.top/api/posts
Content-Type: application/json
Authorization: Bearer <PUBLISH_TOKEN>
```

请求体字段：`title`、`excerpt`、`category`、`image`、`images`、`bodyHtml`、`merchantName`、`merchantUrl`、`mid`、`trackUrl`、`author`。`title` 和 `bodyHtml` 必填。

成功时返回 200：

```json
{
  "slug": "生成的英文短横线 slug",
  "url": "https://www.ajiusblogs.top/post-detail?slug=生成的英文短横线 slug"
}
```

`url` 只会是 `https://www.ajiusblogs.top/post-detail?slug=...`。`merchantUrl` 是商家网站，只作记录，不会当成这篇文章的地址。`bodyHtml` 里的购买和跟踪链接原样保存。日期用 Vercel 服务器当天的 UTC 日期。

博客页面使用的读取接口不需要 `PUBLISH_TOKEN`：

- `GET https://www.ajiusblogs.top/api/posts`：已通过接口发布的文章列表
- `GET https://www.ajiusblogs.top/api/posts/<slug>`：该篇的 `{ "bodyHtml": "..." }`

列表页把接口文章和 `BLOG_POSTS` 按 slug 合并，slug 相同以接口数据为准。详情页先用 `ARTICLE_CONTENTS` 里的旧正文，没有再请求上面的 GET。
