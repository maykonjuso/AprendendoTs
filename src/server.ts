import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();

mongoose.connect("mongodb://localhost/firstapi");

// rotas

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log("🔥 O servidor rodando no endereço http://localhost:3000 🔥");
});
