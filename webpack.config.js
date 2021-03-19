const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
 entry: path.join(SRC_DIR, 'index.js'),
 output: {
   path: OUT_DIR,
   filename: 'app.js',
   publicPath: '/'
 },
 module: {
   rules: [
     {
       test:/\.(js|jsx)$/,
       exclude: /node_modules/,
       use: 'babel-loader'
     }
   ]
 },
 mode: 'development',
 resolve: {
   extensions: ['.js', '.jsx']
 },
 devServer: {
  historyApiFallback: true,
},
// plugins: [
//   new HtmlWebpackPlugin({
//     template: path.resolve(__dirname, 'public/index.html'),
//     filename: 'index.html',
//   })
// ]
};
