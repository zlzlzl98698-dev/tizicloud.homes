# 梯子云 (tizicloud.homes)

面向中文用户的跨境网络工具评测、品牌全景数据库与客户端配置知识库。本项目基于 VitePress 静态站点生成体系与 Pagefind 离线检索构建。

---

## 项目架构与专题导航

```text
docs/
├── airport/                  # 机场推荐专题（基础指南、测速排行、性价比方案、企业专线）
├── vpn/                      # VPN 与网络加速器评测（全球商业服务、移动端配置、协议分析）
├── clash/                    # Clash 客户端生态知识库（Verge、Mihomo 内核、订阅管理、排障）
├── resources/                # 资源与情报专区（节点巡检、风险预警、常见问答、技术情报）
├── brands/                   # 机场品牌全景数据库（41 家独立服务商实体参数）
└── compare/                  # 2026 横向多维对比中心
```

---

## 技术规范与 SEO 基建

- **静态渲染**：VitePress 1.6+ SSG 预渲染，纯静态 HTML 输出，无后端数据库依赖。
- **全文检索**：Pagefind 客户端离线静态索引，毫秒级搜索体验。
- **SEO 与结构化数据**：
  - 全站 100% 注入绝对地址 Canonical 标签。
  - 自动化装配 Schema.org 组织机构、站点及多层级面包屑导航。
  - 商业合作链接均严格加注 `rel="nofollow sponsored noopener"`。
- **Web 容器支持**：配备生产级 Apache `.htaccess` 规则，支持强制 HTTPS、301 规范化重定向与长效静态文件缓存。

---

## 本地开发与构建

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

在本地浏览器打开 `http://localhost:5173/` 查看实时预览。

### 3. 生成生产静态构建

```bash
npm run build
```

构建产物将输出至 `docs/.vitepress/dist`，同时自动完成全站 Pagefind 搜索索引构建。

### 4. 预览生产环境产物

```bash
npm run preview
```

在本地 `http://localhost:4173/` 预览生产构建效果。

---

## 生产部署

将 `docs/.vitepress/dist/` 目录中的全部文件上传至目标 Web 服务器（如 Apache、Nginx 或 Cloudflare Pages）的网站根目录即可。
