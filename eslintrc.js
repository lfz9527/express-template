// .eslintrc.js

module.exports = {
  root: true,
  // 扩展规则
  extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  // 注册插件
  plugins: ["prettier"],
  // 规则 根据自己需要增加
  rules: {
    // 禁止使用 var
    "no-var": "error",
    // 禁止出现空语句块
    "no-empty": "warn",
    // 禁止不必要的括号
    "no-extra-parens": "off",
    // 禁止对 function 声明重新赋值
    "no-func-assign": "warn",
    // 强制所有控制语句使用一致的括号风格
    curly: "warn",
    // 要求 switch 语句中有 default 分支
    "default-case": "warn",
    // 要求使用 === 和 !==
    eqeqeq: "warn",
    // 禁止出现空函数
    "no-empty-function": "warn",
    "prefer-const": "warn",
    // 禁止出现;
    semi: "off",
  },
};
