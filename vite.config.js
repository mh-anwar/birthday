export default {
	build: {
		rollupOptions: {
			input: {
				main: 'index.html',
				// Include 404
				404: './404.js',
				404: '404.html',
			},
		},
	},
};
