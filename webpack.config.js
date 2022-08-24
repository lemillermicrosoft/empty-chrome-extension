const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { optimize } = require("webpack");
const { join } = require("path");
let prodPlugins = [];
if (process.env.NODE_ENV === "production") {
  prodPlugins.push(
    new optimize.AggressiveMergingPlugin(),
    new optimize.OccurrenceOrderPlugin()
  );
}
module.exports = {
  mode: process.env.NODE_ENV,
  devtool: "inline-source-map",
  devServer: {
    contentBase: join(__dirname, "./src"),
    historyApiFallback: true,
  },
  entry: {
    background: join(__dirname, "src/background/background.ts"),
    popup: join(__dirname, "./src/index-popup.tsx"),
    options: join(__dirname, "./src/index-options.tsx"),
    content: join(__dirname, "./src/index-content.tsx"),
  },
  output: {
    path: join(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.aac$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    ...prodPlugins,
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: 'src/popup.html',
      chunks: ['popup']
  }),
  new HtmlWebpackPlugin({
      filename: 'options.html',
      template: 'src/options.html',
      chunks: ['options']
  }),
  new HtmlWebpackPlugin({
      filename: 'content.html',
      template: 'src/content.html',
      chunks: ['content']
  }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
};
