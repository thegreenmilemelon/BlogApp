import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/user.route.js";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.get("/test", (req, res) => {
  res.json({ message: "API is working!" });
});

app.use("/api/users", userRouter);

app.listen(3000, () => console.log("Server is running on port 3000"));
