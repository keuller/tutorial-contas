const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

let extractSass = new ExtractTextPlugin('dist/[name].sass')

module.exports = {
    entry:{
        bundle: path.resolve(__dirname, 'src/index.js'),
        vendor: ['inferno', 'inferno-component']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                }
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx'],
        alias: {
        }
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true
    },

    devtool: '#eval-source-map',

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("contas.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            warnings: false
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = false
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                conditionals: true,
                warnings: false,
                dead_code: true,
                unused: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
