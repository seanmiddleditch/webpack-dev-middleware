'use strict';

module.exports = [{
  context: __dirname,
  entry: './foo.js',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: '/client',
    publicPath: '/client/'
  }
}, {
  context: __dirname,
  entry: './bar.js',
  output: {
    filename: 'bar.js',
    path: '/server'
  }
}];
