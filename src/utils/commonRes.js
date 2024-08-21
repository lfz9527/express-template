const Code = require("../constants/code");
const logger = require("../utils/logger.js");
const { getFirstItemAtArray } = require("../utils/index");
const code = new Code();
const { isObject } = require("../utils/is.js");

// 默认成功响应
function commonRes(res, data, options) {
  options = Object.assign({ type: code.success().type }, options || {});

  console.log(options);

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

  // 如果是多个错误,只返回第一个
  let sendMessage = getFirstItemAtArray(message);
  if (isObject(sendMessage)) sendMessage = sendMessage.msg;

  this(res, data, {
    type: "error",
    message: code.error(sendMessage).message,
    status: status || 409,
  });
};

// 成功响应,接口参数校验失败
commonRes.params_error = function (res, data, message, status) {
  logger.error(code.params_error(message).message);

  // 如果是多个错误,只返回第一个
  const sendMessage = getFirstItemAtArray(message);
  if (isObject(sendMessage)) sendMessage = sendMessage.msg;

  this(res, data, {
    type: "params_error",
    message: code.params_error(sendMessage).message,
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
