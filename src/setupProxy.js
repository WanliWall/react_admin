const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
    createProxyMiddleware('/api', {
      target: 'http://159.75.128.32:5000/',
      changeOrigin: true
    })
  )
	app.use(
		createProxyMiddleware('/fileApi', {
			target: 'http://159.75.128.32:5000/',
			changeOrigin: true,
			pathRewrite: {
				'^/fileApi': ''
			}
		})
	)
}
