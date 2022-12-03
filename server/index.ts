import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import connectToAtlas from "./config/database";

// Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

connectToAtlas();

// routes
app.get("/", (req, res) => {
  res.json({
    message: "Server Entry End Point",
  });
});

// server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
