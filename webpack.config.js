'use strict';

const env = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');
const webpackUMDExternal = require('webpack-umd-external');

const pluginsList = [];
const outputFileName = env === 'production' ?
  'react-soundplayer.min.js' :
  'react-soundplayer.js';

if (env === 'production') {
  pluginsList.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    })
  );
}

const config = {
  entry: path.join(__dirname, './index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: outputFileName,
    library: 'ReactSoundplayer',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  externals: webpackUMDExternal({
    'react': 'React',
    'soundcloud-audio': 'SoundCloudAudio'
  }),

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: pluginsList,

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};

module.exports = config;
