# 梯子云 (tizicloud.homes) - 生产部署与网站维护操作手册 (DEPLOYMENT.md)

- **品牌名称**：梯子云
- **项目域名**：tizicloud.homes（目标主机 `https://clash-cloud.run` / `https://tizicloud.homes`）
- **技术框架**：VitePress 1.6+ / Vue 3 / TypeScript / Pagefind 1.6+
- **构建输出目录**：`docs/.vitepress/dist`

---

## 一、完整构建命令

在部署或发布新内容前，在项目根目录下依次或直接执行：

```bash
# 1. 安装项目依赖（首次或有新依赖时）
npm install

# 2. 一键执行 VitePress 静态构建并自动生成 Pagefind 搜索索引
npm run build
```

该命令将自动完成：
1. VitePress 编译所有 180+ 篇 Markdown 为纯静态 HTML、CSS 和 JS；
2. 自动生成规范的 `sitemap.xml`（自动排除 404 等非索引页）；
3. 自动将 `docs/public/` 下的 `.htaccess`、`robots.txt`、测试截图等直接输出至 `docs/.vitepress/dist` 根目录；
4. 运行 `pagefind` 对所有已生成的静态 HTML 文件完成全量中文分词与搜索索引构建。

---

## 二、部署目录说明

在 Apache 服务器中，Web 根目录（DocumentRoot）必须直接指向构建产物目录 `docs/.vitepress/dist`，或将其内部全部文件同步至 Web 根目录：

```
docs/.vitepress/dist/
├── .htaccess                      <-- Apache 规则（HTTPS/重定向/缓存/安全头）
├── robots.txt                     <-- 搜索引擎抓取许可及 Sitemap 指引
├── sitemap.xml                    <-- 187 个全量页面地图
├── 404.html                       <-- 404 规范错误响应页
├── index.html                     <-- 网站商业评测首页
├── airport/                       <-- 机场推荐专题及二级/三级页面
├── vpn/                           <-- VPN 与加速器专题
├── clash/                         <-- Clash 客户端专题
├── resources/                     <-- 资源与情报专题
├── brands/                        <-- 41 家品牌数据库及深度评测单页
├── compare/                       <-- 全品牌横向对比中心
├── images/                        <-- 17 张原始测速大图与 7 张解锁实测证据
├── pagefind/                      <-- 静态全文搜索分词与索引文件
└── assets/                        <-- Vite 构建的 CSS/JS 资源
```

---

## 三、Apache 生产配置指南

### 1. VirtualHost 示例配置 (`/etc/apache2/sites-available/tizicloud.conf`)

```apache
<VirtualHost *:80>
    ServerName tizicloud.homes
    ServerAlias www.tizicloud.homes clash-cloud.run
    DocumentRoot /var/www/tizicloud.homes/docs/.vitepress/dist

    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</VirtualHost>

<VirtualHost *:443>
    ServerName tizicloud.homes
    ServerAlias www.tizicloud.homes clash-cloud.run
    DocumentRoot /var/www/tizicloud.homes/docs/.vitepress/dist

    SSLEngine on
    SSLCertificateFile /etc/ssl/certs/tizicloud.homes.crt
    SSLCertificateKeyFile /etc/ssl/private/tizicloud.homes.key

    <Directory "/var/www/tizicloud.homes/docs/.vitepress/dist">
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # 错误日志与访问日志
    ErrorLog ${APACHE_LOG_DIR}/tizicloud_error.log
    CustomLog ${APACHE_LOG_DIR}/tizicloud_access.log combined
</VirtualHost>
```

### 2. 必要 Apache 模块激活

```bash
sudo a2enmod rewrite headers expires ssl
sudo systemctl restart apache2
```

---

## 四、网站日常维护与更新指南

### 1. 更新现有文章的方法
- 找到对应的文章路径（如 `docs/brands/guangsu/index.md` 或 `docs/airport/recommend/selection/recommend-selection-art-1.md`）；
- 修改正文 Markdown 或 Frontmatter 元数据；
- 运行 `npm run build` 重新编译并重新建立 Pagefind 搜索索引；
- 将构建生成的文件上传同步至服务器。

### 2. 新增品牌的方法
1. **更新数据中心**：在 `data/brands.ts` 与 `data/brands.json` 中追加新品牌对象（包含 slug、起步价、线路架构、协议、aff 推广链接、优惠码、测速信息等）；
2. **新增评测单页**：在 `docs/brands/<new-slug>/index.md` 创建独立评测 Markdown 文件，调用统一的组件（`<BrandAffiliateCard>`、`<BrandInfrastructureSnapshot>`、`<BrandPlanTable>`、`<NetworkTopology>` 等）；
3. **重新构建**：执行 `npm run build`。全站品牌库组件与地图将自动引入新品牌。

### 3. 新增专题或文章集群的方法
1. **更新导航数据**：在 `data/navigation.ts` 与 `docs/.vitepress/config.mts` 的 `nav` 和 `sidebar` 中登记新专题或集群路由；
2. **创建专题落地页**：在 `docs/<primary>/<secondary>/index.md` 编写包含 Answer-First 导言与集群导航的落地 Markdown；
3. **分配唯一 URL**：在 `SEO-URL 路由规划.csv` 中登记并在 `docs` 对应目录下编写代表性实操长文；
4. **重新构建**：执行 `npm run build`。
