const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = {
  mode: "development",
  devServer: {
    port: 8001,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ProvidePlugin({
      React: "react", // automatically import react where needed
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-typescript",
              "@babel/preset-env",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
