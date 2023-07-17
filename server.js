import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8000;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});
