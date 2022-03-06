const express = require("express");

const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
