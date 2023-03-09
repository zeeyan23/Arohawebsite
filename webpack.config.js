const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js', // Replace with the entry point of your React.js app
    emailService: path.resolve(__dirname, 'server', 'routes', 'router.js') // Use an absolute path to reference the email service code
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  target: 'node', // Set the target to node
  resolve: {
    extensions: ['.js']
  },
  plugins: [],
  optimization: {
    minimize: true,
  },
  mode: 'production',
};
