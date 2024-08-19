// 如果执行过程有错误，则捕捉并赋值给返回数组的第一个元素
async function silentHandle(fn, ...args) {
  let res = [];
  try {
    res = [null, await fn(...args)];
  } catch (e) {
    res = [e, null];
  }
  return res;
}

module.exports = silentHandle;
