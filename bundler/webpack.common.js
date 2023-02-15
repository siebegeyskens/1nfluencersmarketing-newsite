const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/script.js"),
    services: path.resolve(__dirname, "../src/services.js"),
    services: path.resolve(__dirname, "../src/privacy.js"),
  },
  output: {
    hashFunction: "xxhash64",
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  devtool: "source-map",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, "../static") }],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/index.html"),
      chunks: ["main"],
      minify: true,
    }),
    new HtmlWebpackPlugin({
      filename: "free-influencers.html",
      template: path.resolve(__dirname, "../src/free-influencers.html"),
      chunks: ["services"],
      minify: true,
    }),
    new HtmlWebpackPlugin({
      filename: "event-management.html",
      template: path.resolve(__dirname, "../src/event-management.html"),
      chunks: ["services"],
      minify: true,
    }),
    new HtmlWebpackPlugin({
      filename: "influencer-campaigns.html",
      template: path.resolve(__dirname, "../src/influencer-campaigns.html"),
      chunks: ["services"],
      minify: true,
    }),
    new HtmlWebpackPlugin({
      filename: "growth-hacking.html",
      template: path.resolve(__dirname, "../src/growth-hacking.html"),
      chunks: ["services"],
      minify: true,
    }),
    new HtmlWebpackPlugin({
      filename: "privacy-policy.html",
      template: path.resolve(__dirname, "../src/privacy-policy.html"),
      chunks: ["services"],
      minify: true,
    }),

    new MiniCSSExtractPlugin(),
  ],
  module: {
    rules: [
      // HTML
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },

      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      // CSS
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },

      // Images
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },

      // Fonts
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext]",
        },
      },
    ],
  },
};
