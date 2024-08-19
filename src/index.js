const express = require("express");
const routes = require("./routes/index.js"); // 路由
const logger = require("./utils/logger.js");
const dbConnect = require("./utils/dbConnect.js");

const { port } = require("../config");
const initMiddleware = require("./middleware/index.js");

const app = express();

// 挂载中间件
initMiddleware(app);

// 启动
app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
  // 数据库链接
  await dbConnect();
  routes(app);
});
