const commonRes = require("../utils/commonRes");
const silentHandle = require("../utils/silentHandle");
const User = require("./user.routes");

// 路由配置
const routerConf = [{ path: "/user", router: User }];

// test
const getInfo = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("info...") : reject("error...");
    }, 500);
  });
};

function routes(app) {
  // 根目录
  app.get("/", async (req, res) => {
    const [e, result] = await silentHandle(getInfo);
    e ? commonRes.error(res, null) : commonRes(res, { result });
  });

  routerConf.forEach((conf) => app.use(conf.path, conf.router));
}

module.exports = routes;
