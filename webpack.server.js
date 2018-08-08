const path = require('path')

module.exports = {
  // We're building a bundle for Node, not the browser
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', {targets: {browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
}