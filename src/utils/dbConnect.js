const mongoose = require("mongoose");
const config = require("../../config");
const logger = require("./logger");

// 连接db
async function dbConnect() {
  const { dbUri, dbUser, dbPassword, dbAuthSource } = config.db || {};
  try {
    const connection = await mongoose.connect(dbUri, {
      user: dbUser,
      pass: dbPassword,
      auth: { authSource: dbAuthSource },
    });
    logger.info("DB connected");
    return connection;
  } catch (error) {
    logger.error("Could not connect to db" + error);
    // 数据库连接失败，退出程序
    process.exit(1);
  }
}

module.exports = dbConnect;
