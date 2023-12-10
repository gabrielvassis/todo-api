import "dotenv/config";
import express from "express";
import todoRouter from "./routes/todo-routes.js";

const app = express();
app.use(express.json());
app.use("/todo", todoRouter);

app.use((err, req, res, next) => {
  console.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(3000, () => console.log("API Started!"));
