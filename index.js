module.exports = {
  "extends": [
    "eslint:recommended",
    "google"
  ],
  "plugins": [
    "prefer-arrow"
  ],
  "rules": {
    // https://github.com/TristonJ/eslint-plugin-prefer-arrow
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        "disallowPrototype": true
      }
    ],
    "quotes": [
      "error",
      "double",
      {
        "allowTemplateLiterals": true
      }
    ],
    "capitalized-comments": [
      "error",
      "always",
      {
        "ignoreConsecutiveComments": true
      }
    ],
    "indent": [
      "error",
      2
    ],
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "semi-style": [
      "error",
      "last"
    ],
    "comma-dangle": [
      "error",
      "never"
    ]
  }
};
