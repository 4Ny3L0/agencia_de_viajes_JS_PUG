import { Testimoniales } from "../models/Testimoniales.js";
export const guardarTestimonial = async (req, res) => {
  const errores = [];
  const { nombre, correo, mensaje } = req.body;
  if (nombre.trim() === "") {
    errores.push({ mensaje: "Agrega un nombre" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "Agrega un correo electronico" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "Agrega un nombre" });
  }
  if (errores.length > 0) {
    const testimoniales = await Testimoniales.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
  } else {
    try {
      await Testimoniales.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect("/testimoniales");
    } catch (e) {
      console.error(e);
    }
  }
};
