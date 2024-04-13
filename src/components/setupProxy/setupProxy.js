const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // Define the endpoint you want to proxy
        createProxyMiddleware({
            target: 'https://www.googleapis.com', // Target API URL
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Remove '/api' from the request path
            },
        })
    );
};
