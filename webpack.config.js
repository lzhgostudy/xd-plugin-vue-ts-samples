const { VueLoaderPlugin } = require("vue-loader");
const Webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "main.js",
    libraryTarget: "commonjs2",
  },
  devtool: "inline-source-map",
  externals: {
    uxp: "uxp",
    scenegraph: "scenegraph",
    commands: "commands",
    application: "application",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/,
        oneOf: [
          // this applies to <template lang="pug"> in Vue components
          {
            resourceQuery: /^\?vue/,
            use: {
              loader: "pug-plain-loader",
              options: {
                basedir: path.resolve(__dirname, "./pug"),
              },
            },
          },
          // this applies to pug imports inside JavaScript
          {
            use: ["raw-loader", "pug-plain-loader"],
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new Webpack.DefinePlugin({
		__VUE_OPTIONS_API__: true,
		__VUE_PROD_DEVTOOLS__: false,
	})],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};
