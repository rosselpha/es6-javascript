const path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'build'),
        inline: true
    }
}
