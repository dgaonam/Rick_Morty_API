const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = aplication => {
  aplication.use("/api", createProxyMiddleware({ target: "https://rickandmortyapi.com/", changeOrigin: true }));
};