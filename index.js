module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prefer-arrow"
  ],
  "extends": [
    "eslint:recommended",
    "google",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "spaced-comment": "off",
    "capitalized-comments": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "index-signature"
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        "assertionStyle": "as",
        "objectLiteralTypeAssertions": "allow"
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        "disallowPrototype": true
      }
    ],
    "no-undef": "off"
  }
};
