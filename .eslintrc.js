module.exports = {
  extends: require.resolve('alita/eslint'),
  rules: {
    'selector-class-pattern': 0,
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    BASE_URL: true,
  },
};
