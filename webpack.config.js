var config = {
   entry: './webcontent/js/main/index.js',
   output: {
      path:'/',
      filename: 'webcontent/js/build/index.min.js',
   },
   devServer: {
	  historyApiFallback: true,
	  contentBase: './',
	  hot: true,
      inline: true,
      port: 8086
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;