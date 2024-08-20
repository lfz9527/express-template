// 用于接口参数校验的中间件
const commonRes = require("../utils/commonRes");
const { validationResult } = require("express-validator");
const validate = (schema) => {
  return [
    // 添加验证规则
    ...schema,
    // 中间件: 检查验证结果
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return commonRes.params_error(res, null, errors.array());
      }
      next();
    },
  ];
};

module.exports = validate;
