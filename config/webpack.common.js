const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const cssLoaders = (withModules) => {
  let cssLoader = 'css-loader';
  if (withModules) {
    cssLoader = {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[local]__[sha1:hash:hex:7]',
        },
        importLoaders: 2,
      },
    };
  }

  return [
    MiniCssExtractPlugin.loader,
    cssLoader,
    'postcss-loader',
    'sass-loader',
  ];
};

module.exports = {
  entry: `${paths.src}/index.js`,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, paths.build),
    assetModuleFilename: 'static/media/[hash][ext][query]',
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, paths.src), 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.join(__dirname, '..', 'src'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
    }),
    new HtmlWebpackPlugin({
      favicon: `${paths.public}/favicon.ico`,
      template: `${paths.public}/index.html`,
      environment: process.env.NODE_ENV,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.module\.(s[ac]|c)ss/i,
        use: cssLoaders(true),
      },
      {
        test: /^((?!\.module).)*(s[ac]|c)ss$/i,
        use: cssLoaders(),
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
        type: 'javascript/auto',
        issuer: {
          and: [/\.(js|jsx)$/],
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
