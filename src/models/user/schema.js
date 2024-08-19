// 接口参数校验 主要使用zod，具体使用可查看文档
const zod = require("zod");
const { object, string } = zod;
// 创建接口
const createUserSchema = object({
  body: object({
    name: string({ required_error: "缺少用户姓名" }),
    account: string({ required_error: "缺少账号名称" }),
    password: string({ required_error: "缺少用户密码" }).min(
      6,
      "密码太短 - 至少6个字符"
    ),
  }),
});

module.exports = createUserSchema;
