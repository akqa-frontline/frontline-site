module.exports = {
  extends: '@akqa-frontline/eslint-config-frontline',
  parser: '@typescript-eslint/parser',
  // next/link is a weird api: https://github.com/vercel/next.js/issues/5533
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"]
      }
    ],
    "jsx-a11y/anchor-has-content": [
      "error",
      {
        "components": ["Link"]
      }
    ]
  },
};
