const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
