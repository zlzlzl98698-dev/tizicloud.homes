const fs = require("fs");

["169篇机场文章标题.txt", "VPN加速器文章标题.txt", "机场推荐文章标题.txt"].forEach(f => {
  const p = "C:/Users/Pro User/Desktop/" + f;
  if (fs.existsSync(p)) {
    const c = fs.readFileSync(p, "utf-8");
    const lines = c.split(/\r?\n/).filter(l => l.trim().length > 0);
    console.log(`${f}: ${lines.length} lines`);
    console.log(`Sample:`, lines.slice(0, 5));
  }
});
