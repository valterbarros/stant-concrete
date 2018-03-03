var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    concrete_library: './javascripts/init',
    astrum_init: './javascripts/astrum_init'
  },
  output: {
    path: __dirname + '/docs/app/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        include: path.join(__dirname, 'stant-ui-library'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins:[
      new webpack.ProvidePlugin({   
          jQuery: 'jquery',
          $: 'jquery',
          jquery: 'jquery'
      })
  ]
};
