/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["expo", "eslint:recommended"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
};
