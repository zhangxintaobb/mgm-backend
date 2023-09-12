module.exports = {
  root: true,
  extends: ["standard", "prettier"],
  plugins: ["prettier"],
  env: {
    node: true
  },
  rules: {
    "standard/computed-property-even-spacing": "off",
    "no-use-before-define": ["error", { functions: false, classes: true }],
    "prettier/prettier": "warn",
    "no-throw-literal": "warn",
    "no-useless-catch": "warn"
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        browser: true,
        es6: true,
        node: true
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json"
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "single"],
        // 'comma-dangle': ['warn', 'always-multiline'],
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-var-requires": 0
      }
    }
  ]
};
