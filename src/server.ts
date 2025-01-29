import express, { Express, Request, Response } from "express";
const { createProxyMiddleware } = require('http-proxy-middleware');
import dotenv from "dotenv";

dotenv.config();

const createExpressServer = (): Express => {
  const app: Express = express();

  app.get("/healthcheck", (req: Request, res: Response) => {
    res.send("OK");
  });

  app.get("/", (req: Request, res: Response) => {
    res.send("OK");
  });

  app.use('/users', createProxyMiddleware({
    target: process.env.URL_USER,
    changeOrigin: true
}));

app.use('/products', createProxyMiddleware({
  target: process.env.URL_PRODUCT,
  changeOrigin: true
}));

  return app;
};
export default createExpressServer;
