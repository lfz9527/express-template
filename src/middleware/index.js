const express = require("express");
const path = require("path");

const responseHeader = require("./responseHeader");
function initMiddleware(app) {
  app.use(express.json());
  // 注册相应头事件
  app.use(responseHeader);
  // 注册静态资源中间件,暴露静态资源对外访问
  app.use("/static", express.static(path.resolve(__dirname, "../../public")));
}

module.exports = initMiddleware;
