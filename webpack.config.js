const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devtool:'source-map',
  devServer:{
      static:{
          directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      open:true,
      hot:true,
      compress: true,
      historyApiFallback:true
  },
  module:{
      rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(svg|png|jpeg|jpg|gif)$/i,
                type: 'asset/resource' 
            }
            
      ]
  },
  plugins: [
      new htmlWebPackPlugin({
          title:"Webpack Dev environment",
          filename: 'index.html',
          template: 'src/template.html'
      }) 
  ]
};