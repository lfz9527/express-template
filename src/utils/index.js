/**
 *
 * @param {*} arr
 * @returns
 * @description 获取数组的第一个元素
 */
const getFirstItemAtArray = (arr) => {
  if (!Array.isArray(arr)) return arr;
  return arr && arr.length > 0 ? arr[0] : [];
};

// 下划线转驼峰
const toCamelCase = (str) => {
  return str.replace(/([-_][a-z])/g, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};

module.exports = {
  getFirstItemAtArray,
  toCamelCase,
};
