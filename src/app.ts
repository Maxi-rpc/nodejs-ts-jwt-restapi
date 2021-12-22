import express, { Application } from "express";

const app: Application = express();

// import routes
import indexRoutes from "./routes/index";

// settings
app.set("port", 3000);

// routes
app.use("/api", indexRoutes);

export default app;
