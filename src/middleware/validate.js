// 用于接口参数校验的中间件
const commonRes = require("../utils/commonRes");
const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    next();
  } catch (e) {
    // 多个错误只取第一个
    return commonRes.error(res, null, e.errors);
  }
};

module.exports = validate;
