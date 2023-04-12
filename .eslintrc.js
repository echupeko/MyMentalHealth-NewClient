module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:vue/essential", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? ["error", { allow: ["error"] }] : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prefer-const": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    "no-empty": ["error", { allowEmptyCatch: true }],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
