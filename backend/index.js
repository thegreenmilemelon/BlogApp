import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ message: "API is working!" });
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => console.log("Server is running on port 3000"));
