import express from "express";
import setupRoute from "./router";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
setupRoute(app);

export default app;
