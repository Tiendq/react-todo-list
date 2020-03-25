module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended", // eslint
    "plugin:import/errors", // eslint-plugin-import
    "plugin:import/warnings", // eslint-plugin-import
    "plugin:react/recommended" // eslint-plugin-react
  ],
  "settings": {
    "react": {
      "version": "detect" // React version. "detect" automatically picks the version you have installed.
    }
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react" // eslint-plugin-react
  ],
  "rules": {
    "no-console": 0,
    "no-extra-semi": 1,
    "no-unreachable": 1,
    "no-unused-vars": 1,
    "react/no-deprecated": 1
  }
};
