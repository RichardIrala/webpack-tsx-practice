const path = require("path");
const liveServer = require("live-server");

const mode = process.env.NODE_ENV;

if (mode === "development") {
  liveServer.start({
    root: "./",
    file: "index.html",
  });
}
module.exports = {
  mode,
  watch: mode == "development" ? true : false,
  entry: "./src/index.tsx",
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
