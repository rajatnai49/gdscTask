import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import userRouter from "./routes/userRoutes.mjs";

app.use("/api/v1", userRouter);

export default app;
