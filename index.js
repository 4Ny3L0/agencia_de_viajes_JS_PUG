import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
// require("dotenv").config({ path: "variables.env" });
const app = express();
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 4000;
db.authenticate()
  .then(() => console.log("Base de datos conectada satisfactoriamente"))
  .catch((e) => console.log(e));

app.set("view engine", "pug");

//obtener el año actual
app.use((req, res, next) => {
  const year = new Date().getFullYear();
  res.locals.year = year;
  res.locals.nombreSitio = "Agencia de Viajes";
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);
console.log(port);
app.listen(port, host, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
