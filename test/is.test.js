const is = require("../src/utils/is");
const { isObject, isNumber } = is;
describe("isObject 函数测试", () => {
  test("应该返回 true 对于非空对象", () => {
    expect(isObject({})).toBe(true);
  });

  test("应该返回 true 对于包含属性的对象", () => {
    expect(isObject({ key: "value" })).toBe(true);
  });

  test("应该返回 false 对于 null", () => {
    expect(isObject(null)).toBe(false);
  });

  test("应该返回 false 对于基本数据类型", () => {
    expect(isObject(123)).toBe(false);
    expect(isObject("string")).toBe(false);
  });
});

describe("isNumber 函数测试", () => {
  test("应该返回 true 对于数字参数", () => {
    expect(isNumber(5)).toBe(true);
    expect(isNumber(-3)).toBe(true);
    expect(isNumber(0)).toBe(true);
  });

  test("应该返回 false 对于非数字参数", () => {
    expect(isNumber("5")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
  });
});
