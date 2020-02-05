module.exports = {
  plugins: ["prettier"],
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  parser: 'babel-eslint',
  env: {
    node: true
  },
  settings: {
    react: {
      version: "16.4.2"
    }
  },
  rules: {
    quotes: ["error", "single", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"]
  }
};
