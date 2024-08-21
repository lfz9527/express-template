class Code {
  constructor() {
    this.code = -1;
    this.message = "";
    this.type = "";
  }
  success(message) {
    this.code = 1;
    this.message = message || "请求成功";
    this.type = "success";

    return this;
  }
  denied(message) {
    this.code = 2002;
    this.message = message || "无权限";
    this.type = "denied";
    return this;
  }
  error(message) {
    this.code = 3003;
    this.message = message || "系统异常";
    this.type = "error";
    return this;
  }
  params_error(message) {
    this.code = -1;
    this.message = message || "参数错误";
    this.type = "params_error";
    return this;
  }
}
module.exports = Code;
