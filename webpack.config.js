/* webpack.config.js */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "/src/assets", to: "assets/", noErrorOnMissing: true },
      ],
    }),
    new ForkCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, " src/pages/"),
    },
  },
  devServer: {
    historyApiFallback: true,

    client: {
      overlay: true,
      progress: true,
    },
    compress: true,
    hot: true,
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: { loader: "file-loader", options: { name: "[name].[ext]" } },
      },
    ],
  },
};
