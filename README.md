## Warning on getInitialState() when using react.min.js

## installation

```
$ NODE_ENV=development; npm install && jspm install
```

## run

```
$ gulp
```

so what happening is, when you run it using react.js there is no warning but when you uncomment the commented code below you will receive the warning.

```
paths: {
  "github:*": "jspm_packages/github/*",
  "npm:*": "jspm_packages/npm/*",
  // "npm:react@0.14.6": "jspm_packages/npm/react@0.14.6/dist/react.min.js"
},
```
