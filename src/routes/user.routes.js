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
router.get(
  "/get",
  validate(UserSchema.getUserByNameSchema),
  UserHandler.getUserHandler
);

module.exports = router;
