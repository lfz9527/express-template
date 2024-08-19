const { Router } = require("express");
const UserSchema = require("../models/user/schema");
const validate = require("../middleware/validate");
const UserHandler = require("../controller/user/controller");

const router = Router();

// 需要校验接口参数的，加上校验中间件
router.post("/create", validate(UserSchema), UserHandler.createUserHandler);

module.exports = router;
