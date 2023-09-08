const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 80, // Используйте порт 80
    headers: {
      "Access-Control-Allow-Origin": "*", // Разрешить CORS со всех источников
    },
  },
  // Ваши другие настройки...
};
