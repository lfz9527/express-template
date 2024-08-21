const isObject = (obj) => {
  return typeof obj === "object" && obj !== null;
};
const isArray = (arr) => {
  return Array.isArray(arr);
};
const isString = (str) => {
  return typeof str === "string";
};
const isFunction = (fn) => {
  return typeof fn === "function";
};
const isNumber = (num) => {
  return typeof num === "number";
};
const isBoolean = (bool) => {
  return typeof bool === "boolean";
};

module.exports = {
  isObject,
  isArray,
  isString,
  isFunction,
  isNumber,
  isBoolean,
};
