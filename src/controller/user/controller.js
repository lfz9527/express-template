// controller
const commonRes = require("../../utils/commonRes");
const silentHandle = require("../../utils/silentHandle");
const UserCrud = require("../../service/user/service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// 创建用户
async function createUserHandler(req, res) {
  const [e, user] = await silentHandle(UserCrud.create, req.body);
  return e ? commonRes.error(res, null, e.message) : commonRes(res, user);
}

// 登录
async function loginHandler(req, res) {
  const { user_name, user_password } = req.body;
  const [e, user] = await silentHandle(UserCrud.findOne, { user_name });
  if (e) return commonRes.error(res, null, e.message);

  const compare = await bcrypt.compare(user_password, user.user_password);

  if (!compare) {
    return commonRes.params_error(res, null, "用户名或密码错误");
  }
  const token = jwt.sign({ userId: user.user_id }, "_jwt_secret");
  return commonRes(res, { token });
}

module.exports = {
  createUserHandler,
  loginHandler,
};
