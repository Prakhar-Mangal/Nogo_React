echo '{
"scripts": {
    "start": "parcel ./index.html",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:main": "parcel build src/index.js --no-minify --no-content-hash --no-cache --no-source-maps --out-dir dist",
    "prod": "npm-run-all build:* copy:*"
  }}'>package.json


npm init -y
npm install --save react react-dom
npm install --save-dev @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react parcel-bundler npm-run-all
npm install --save  antd
npm install --save pullstate


echo '<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./index.css">
    <title>REACT</title>
  </head>
  <body>
    <div id="root">Loading...</div>
    <script src="./src/index.js"></script>
  </body>
</html>'>index.html

touch index.css
mkdir src
mkdir src/components

echo 'import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
if (module.hot) {
  module.hot.accept();
}
var root = document.getElementById("root");
ReactDOM.render(<App/>, root);'>src/index.js

echo 'import React from "react"
export default function App() {
    return (
        <div>
            Welcome to react
        </div>
    )
}'>src/components/App.jsx

echo 'import { Store } from "pullstate";
export const UIStore = new Store({
  isDarkMode: true,
});
//  const isDarkMode = UIStore.useState(s => s.isDarkMode);
//   onClick={() =>
//          UIStore.update(s => {
//            s.isDarkMode = !isDarkMode;
//          })
'>src/components/Store.js


echo '{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ],
    ["@babel/preset-react"]
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css"
      }
    ]
  ]
}'>.babelrc

echo 'node_modules
.cache'>.gitignore

git init
git add .
git commit -m "initial"

npm start
