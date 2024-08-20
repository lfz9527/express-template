const path = require("path");
const four0four = path.join(__dirname, "../views/404.html");
const User = require("./user.routes");

// 路由配置
const routerConf = [{ path: "/user", router: User }];

function routes(app) {
  // 根目录
  // app.get("/", async (req, res) => {});

  routerConf.forEach((conf) => app.use(conf.path, conf.router));

  // 路由拦截没如果找不到路由返回自定义404页面
  app.use((req, res) => {
    res.status(404).sendFile(four0four);
  });
}

module.exports = routes;
