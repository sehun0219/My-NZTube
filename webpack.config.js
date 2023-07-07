const path = require("path"); // path module
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// entry + output

module.exports = {
  entry: {
    main: "./src/client/js/main.js",
    videoPlayer: "./src/client/js/videoPlayer.js",
  }, // file which will be transformed
  mode: "development", // development or production
  output: {
    filename: "js/[name].js", // name
    path: path.resolve(__dirname, "assets"), // storage
    clean: true, // clean the folder before build
  },
  watch: true, // watch for changes
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // webpack takes loaders from right to left
      },
    ],
  },
};
