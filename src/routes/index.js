const path = require("path");
const User = require("./user.routes");

// 路由配置
const routerConf = [{ path: "/user", router: User }];

function routes(app) {
  // 根目录
  // app.get("/", async (req, res) => {});

  routerConf.forEach((conf) => app.use(conf.path, conf.router));
}

module.exports = routes;
