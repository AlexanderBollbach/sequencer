module.exports = {
	entry: ["./src/index.js"],
	output: {
		path: __dirname + "/dist/",
		publicPath: "/dist",
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ["es2015", "react", "stage-2"]
				}
			},

			{
				test: /\.css$/,
				loader:
					"style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
			}
		]
	},
	devServer: {
		publicPath: "/",
		contentBase: "./dist"		
	}
};
