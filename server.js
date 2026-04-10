import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import classifyRoute from "./route/classifyRoute.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`Our backend is running on ${PORT} `);
});

app.use("/api", classifyRoute);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
