module.exports = {
  devtool: 'source-map',

  entry: './index.jsx',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },

  devServer: {
    inline: true,
    stats: 'error-only'
  }
};