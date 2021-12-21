import express, { Application } from "express";

const app: Application = express();

// import routes
import routes from "./routes/index";

// settings
app.set("port", 3000);

// routes
app.use(routes);

export default app;
