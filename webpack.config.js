/* eslint-disable */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
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
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
