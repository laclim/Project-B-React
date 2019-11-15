const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  watch: true,
  entry: {
    app: ["./src/app/index.tsx"],

    vendor: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "js/[name].bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, "./dist"),
    port: 8000,
    historyApiFallback: true,
    proxy: {
      "/": {
        target: "http://localhost:3000",
        changeOrigin: true,
        bypass: function(req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          }
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/app", "index.html"),
      filename: path.join("index.html")
    })
    // new webpack.HotModuleReplacementPlugin()
  ]
};
