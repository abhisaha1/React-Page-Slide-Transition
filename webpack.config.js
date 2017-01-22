const path = require('path');

module.exports = {
  
  entry: [
    path.resolve(__dirname, 'app/main.js')
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      { test: /\.scss$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader!sass-loader' },
    ],
  },
}