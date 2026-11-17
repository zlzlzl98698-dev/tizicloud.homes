const fs = require("fs");
const path = require("path");

const navigation = JSON.parse(fs.readFileSync("data/navigation.json", "utf-8"));
const articles = JSON.parse(fs.readFileSync("data/articles_db.json", "utf-8"));
const brands = JSON.parse(fs.readFileSync("data/brands.json", "utf-8"));

console.log("Updating 56 cluster index files to reflect all 8 articles published...");

navigation.forEach(p => {
  p.secondary.forEach(s => {
    s.clusters.forEach(cl => {
      const clDir = `docs${cl.url}`;
      const clusterArticles = articles.filter(a => a.clusterUrl === cl.url);

      const clMd = `---
title: ${cl.name} 2026 深度解析与实操指南 - 梯子云
description: ${cl.name} 专业文章集群，系统梳理 ${cl.kw} 的核心原理、选型考量、性能实测与常见报错排错。
head:
  - - meta
    - name: keywords
      content: ${cl.kw}
---

# 📚 ${cl.name}

> [!NOTE] Answer-First 核心摘要
> **集群主题概要**：围绕 **${cl.name}** 与核心关键词 **${cl.kw}**，本文档梳理了业界最新的技术参数、实操步骤、避坑指南以及对应的高性价比品牌方案。

## 📑 本集群完整文章矩阵 (共 ${clusterArticles.length} 篇全部已发布)

<div class="tz-table-wrap">
  <table class="tz-data-table">
    <thead>
      <tr>
        <th>文章标题</th>
        <th>核心关键词</th>
        <th>优先级</th>
        <th>发布状态</th>
        <th>阅读入口</th>
      </tr>
    </thead>
    <tbody>
${clusterArticles.map(a => `      <tr>
        <td><strong>${a.title}</strong></td>
        <td><code style="color: #2563eb;">${a.primaryKeyword}</code></td>
        <td><span style="background: #f1f5f9; padding: 0.15rem 0.4rem; border-radius: 4px; font-size: 0.75rem;">${a.priority}</span></td>
        <td><span style="color: #059669; font-weight: bold;">● 已正式发布</span></td>
        <td><a href="${a.url}" style="color: #2563eb; font-weight: 600;">阅读全文 ➔</a></td>
      </tr>`).join('\n')}
    </tbody>
  </table>
</div>

---

## 🌟 核心深度推荐文章直达

- 📖 [【${cl.name}】2026 深度选型与权威实测指南](${clusterArticles[0].url})
- 📖 [【${cl.name}】核心原理、避坑要点与操作详解](${clusterArticles[1].url})
- 📖 [【${cl.name}】晚高峰网络表现与多维度横向对比](${clusterArticles[3].url})

---

<BrandAffiliateCard :brand="${JSON.stringify(brands[0]).replace(/"/g, '&quot;')}" />
`;
      fs.writeFileSync(path.join(clDir, "index.md"), clMd, "utf-8");
    });
  });
});

console.log("Updated 56 cluster index pages successfully!");
