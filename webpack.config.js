const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./lib/red_riding.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
};
