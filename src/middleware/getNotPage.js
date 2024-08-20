// 动态返回404页面
const path = require("path");
const four0four = path.resolve(path.join(__dirname, "../views/404.html"));

const getNotPage = (req, res) => {
  res.status(404).sendFile(four0four);
};
module.exports = getNotPage;
