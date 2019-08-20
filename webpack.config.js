const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
	filename: 'main.js',
	path: path.resolve(__dirname, 'dist')
    },
    module: {
	rules: [
	    {
		test: /\.css$/i,
		use: ['style-loader', 'css-loader']
	    },
	    {
		test: /\.csv$/i,
		use: 'raw-loader'
	    },
	    {
		test: /\.tsv$/i,
		use: 'raw-loader'
	    },
	    {
		test: /\.txt$/i,
		use: 'raw-loader'
	    }
	    ]
    }
};
