// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;



const config = {
    entry: {
      app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
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
            directory: path.join(__dirname, './dist'),
          },
        compress: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: "index.html",
            favicon: "./public/favicon.ico"
        }),
        new FaviconsWebpackPlugin({
            logo: './public/logo192.png',
            manifest: './public/manifest.json',
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
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.svg$/i,
                use: ['@svgr/webpack'],
              },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      name: 'assets/lottie/[name].[hash:8].[ext]',
                    }
                  }
                ]
              },
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            //     type: 'asset',
            // },
            {
                test: /\.(jpeg|png|ico)$/,
                loader: "file-loader",
                options: {
                  publicPath: "./",
                  name: "[name].[ext]"
                }
              }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
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
