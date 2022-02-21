const path = require('path');

//vtk.js webpack rules required
const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ].concat(vtkRules), //vtk.js webpack rules required
  },
  resolve: {
    extensions: ['.js'],
  },
  
  devServer: {
    static: {
        directory: path.join(__dirname,  'dist'),
      },
    hot: false,
    compress: true,
    port: 8080,
  
  },
};