const mongoose = require("mongoose");

// 模板校验规则
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    account: { type: String, required: true },
    password: { type: String, required: true },
    describe: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

// 唯一
userSchema.index({ account: 1, deletedAt: 1 }, { unique: true });

// 创建模板 执行之后会自动在mongodb中创建相应的模板
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
