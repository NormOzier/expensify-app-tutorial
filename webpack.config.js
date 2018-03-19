const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
          path: path.join(__dirname, 'public', 'dist'),
          filename: 'bundle.js'
        },
        //loaders
        module: {
            rules:[{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }),
                test: /\.s?css$/
            }]
        },
        plugins: [
            CSSExtract
        ],
        //source maps helps by linking original files, instead of bandel.js
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer:{
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};

