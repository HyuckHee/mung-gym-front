// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path'); //pah 모듈은 파일경로를 지정하기 위해 사용되는 Node.js 모듈
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;



const config = {
    entry: path.resolve(__dirname, 'src/App.js'),
    // entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: "index.html",
            favicon: "public/favicon.ico"
        }),
        new FaviconsWebpackPlugin({
            logo: 'public/logo192.png',
            manifest: 'public/manifest.json',
          }),

        
        new MiniCssExtractPlugin(),

        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['**/*.LICENSE.txt'],
            protectWebpackAssets: false
          }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules)/,
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              },
              use: 
                {
                  loader: 'babel-loader',
                }
            },
            {
                test: /\.(css|scss)$/i,
                use: 
                [
                  {
                    loader: stylesHandler
                  },
                  {
                    loader: 'css-loader'
                  },
                  {
                    loader: 'postcss-loader'
                  },
                ],
            },
            {
                test: /\.svg$/i,
                use: [
                  {
                    loader : '@svgr/webpack'
                  }
                ],
              },
              {
                test: /\.html$/,
                use : [
                  {
                    loader: "html-loader",
                    options: {
                      minimize: true,
                    },
                  }
                ]
              },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    devServer: {
      client: {
          logging: 'info',
          overlay: {
              errors: true,
              warnings: false,
              runtimeErrors: true,
          },
        },
      static: {
          directory: path.join(__dirname, 'dist'),
        },
      compress: true,
      host: 'localhost',
      hot: true
  },
};

module.exports = () => {

    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
