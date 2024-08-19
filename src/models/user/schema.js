// 接口参数校验 主要使用express-validator，具体使用可查看文档
const { body, query } = require("express-validator");
// 创建用户的参数校验规则
const createUserSchema = [
  body("name").notEmpty().withMessage("缺少用户姓名"),
  body("account").notEmpty().withMessage("缺少账号名称"),
  body("password")
    .notEmpty()
    .withMessage("缺少用户密码")
    .isLength({ min: 6 })
    .withMessage("密码太短 - 至少6个字符"),
];

const getUserSchema = [query("name").notEmpty().withMessage("缺少用户姓名")];

module.exports = {
  createUserSchema,
  getUserSchema,
};
