const Code = require("../constants/code");
const logger = require("../utils/logger.js");
const code = new Code();

// 默认成功响应
function commonRes(res, data, options) {
  options = Object.assign({ type: code.success().type }, options || {});

  const { type, status, message } = options;

  let resStatus = status;

  if (resStatus === undefined) {
    // 根据状态设置状态码
    // 409 传入参数不正确
    resStatus = type === code.success().type ? 200 : 409;
  }
  // 响应参数
  const sendRes = {
    code: code[type]().code,
    data,
  };

  message && (sendRes.message = message);
  return res.status(resStatus).send(sendRes);
}

// 错误响应
commonRes.error = function (res, data, message, status) {
  logger.error(code.error(message).message);

  let sendMessage = message;

  // 数组只去取第一个
  if (Array.isArray(message)) {
    const [first = {}] = message;
    sendMessage = first.message || "";
  }

  this(res, data, {
    type: "error",
    message: code.error(sendMessage).message,
    status: status || 409,
  });
};

// 无权限响应
commonRes.denied = function (res, data) {
  this(res, data, {
    type: "denied",
    message: code.denied().message,
    status: 401,
  });
};

module.exports = commonRes;
