const mongoose = require("mongoose");
const { Schema } = mongoose;

// 模板校验规则
const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      default: new mongoose.Types.ObjectId(),
      unique: true, // 可选，确保唯一性
      description: "用户id",
    },
    user_name: { type: String, required: true, description: "用户名称" },
    user_email: { type: String, required: true, description: "用户邮箱" },
    user_phone: { type: String, required: false, description: "用户手机号" },
    user_sex: {
      type: String,
      required: true,
      description: "用户性别（0男 1女 2未知）",
    },
    user_avatar: { type: String, required: false, description: "用户头像地址" },
    user_password: { type: String, required: true, description: "用户密码" },
    status: {
      type: String,
      default: 0,
      description: "帐号状态（0正常 1停用）",
    },
    flag: {
      type: String,
      default: 0,
      description: "删除标志（0代表存在 2代表删除）",
    },
  },
  {
    timestamps: true,
  }
);

// 创建联合索引
userSchema.index({ user_id: 1, user_name: 1 }, { unique: true });

// 创建模板 执行之后会自动在mongodb中创建相应的模板
const UserModel = mongoose.model("sys_user", userSchema);

module.exports = UserModel;
