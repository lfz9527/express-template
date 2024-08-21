const { Router } = require("express");
const UserSchema = require("../models/user/schema");
const validate = require("../middleware/validate");
const UserHandler = require("../controller/user/controller");

const router = Router();

router.post(
  "/create",
  validate(UserSchema.createUserSchema),
  UserHandler.createUserHandler
);

router.post(
  "/login",
  validate(UserSchema.loginSchema),
  UserHandler.loginHandler
);

module.exports = router;
