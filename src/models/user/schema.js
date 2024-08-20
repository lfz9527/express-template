// 接口参数校验 主要使用express-validator，具体使用可查看文档
const { body, query } = require("express-validator");
// 创建用户的参数校验规则
const createUserSchema = [
  body("user_name").notEmpty().withMessage("请输入用户姓名"),
  body("user_email")
    .notEmpty()
    .withMessage("请输入邮箱")
    .isEmail()
    .withMessage("请输入正确的邮箱地址"),
  body("user_sex").notEmpty().withMessage("请输入性别"),
  body("user_password")
    .notEmpty()
    .withMessage("请输入密码")
    .isLength({ min: 6 })
    .withMessage("密码太短 - 至少6个字符"),
];

const getUserByNameSchema = [
  query("user_name").notEmpty().withMessage("缺少用户姓名"),
];

module.exports = {
  createUserSchema,
  getUserByNameSchema,
};
