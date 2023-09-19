var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.js"
  },
  module: {
    rules: [
      {
        // Для всех файлов HTML
        test: /\.html$/,
        use: [
          {
            // Воспользуемся загрузчиком html-loader
            loader: "html-loader",
            // Который заодно проминимизирует наш HTML
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    // Скопируем наш index.html в папку dist
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
};
