// controller
const commonRes = require("../../utils/commonRes");
const silentHandle = require("../../utils/silentHandle");
const UserCrud = require("../../service/user/service");

async function createUserHandler(req, res) {
  const [e, user] = await silentHandle(UserCrud.create, req.body);
  return e ? commonRes.error(res, null, e.message) : commonRes(res, user);
}

module.exports = {
  createUserHandler,
};
