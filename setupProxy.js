const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://devquiz.pro",
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware("/login/oauth2", {
      target: "https://devquiz.pro",
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:8080",
      changeOrigin: true,
    }),
  );
};
