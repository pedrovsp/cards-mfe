const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4000,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      // best place to understand Module Federation config https://github.com/webpack/webpack/pull/10960
      name: "Cards",
      filename: "remoteEntry.js",
      exposes: {
          './Cards': './src/App.tsx',
      }, 
      shared: {
        "@types/react": {
          singleton: true,
          eager: true,
        },
        "@types/react-dom": {
          singleton: true,
          eager: true,
        },
        "date-fns": {
          singleton: true,
          eager: true,
        },
        "react-dom": {
          singleton: true,
          eager: true,
        },
        react: {
          singleton: true,
          eager: true,
        },
        "react-is": {
          singleton: true,
          eager: true,
        },
        "styled-components": {
          singleton: true,
          eager: true,
        },
        "react-icons": {
          singleton: true,
          eager: true,
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'assets'), to: path.resolve(__dirname, 'dist', 'assets') },
      ],
    })
  ],
};
