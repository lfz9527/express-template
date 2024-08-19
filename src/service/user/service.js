// mongodb操作
const BaseCrudProvider = require("../../utils/crudProvider");
const UserModel = require("../../models/user/model");
const UserCrud = BaseCrudProvider(UserModel);
module.exports = UserCrud;
