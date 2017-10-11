import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const appDir = './app/';

export default new Config().merge({
  entry: appDir + 'app.js',
  output: {
    path: __dirname + '/../build',
    publicPath: 'js',
  },
  devtool: process.env.NODE_ENV==='development' ? 'inline-source-map' : 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: appDir + 'index.html',
      inject: "body"
    })],
  devServer: {
    contentBase: __dirname + '/../build',
    compress: true,
    port: process.env.NODE_ENV==='development' ? 9000 : 9900
  }
});