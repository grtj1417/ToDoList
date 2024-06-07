const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/js/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        devtool: isProduction ? false : 'inline-source-map',
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                minify: {
                    //清除html註解及空白
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name][ext]' // 添加 [hash] 以避免缓存问题
                    }
                }
            ]
        }
    };
};
