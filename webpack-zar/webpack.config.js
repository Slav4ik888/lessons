const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const
  prod = process.env.NODE_ENV,
  mode = prod ? prod : `development`;

module.exports = {
  mode,
  entry: path.resolve(__dirname, `src/index.js`),
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `build.js`,
    assetModuleFilename: 'images/[name]__[hash][ext][query]'
  },

  resolve: {
    extensions: [`*`, `.js`, `.jsx`, `.json`, `.css`, `.ts`, `.tsx`]
  },
  
  devServer: {
    port: 3000,
    open: false,
    hot: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        loader: `ts-loader`,
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                auto: /\.module\.\w+$/,
                localIdentName: `[name]__[local]__[hash:base64:5]`
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: `asset/resource`
      },
      {
        test: /\.svg$/,
        use: [`@svgr/webpack`, `url-loader`],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `public/index.html`)
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, `public/favicon.ico`),
          to: path.resolve(__dirname, `dist/favicon.ico`)
        }
      ]
    })
  ].concat(prod ? [new MiniCssExtractPlugin()] : [])
}
