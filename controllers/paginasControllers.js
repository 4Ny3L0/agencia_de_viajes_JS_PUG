import { Viaje } from "../models/VIajes.js";
import { Testimoniales } from "../models/Testimoniales.js";

export const paginaInicio = async (req, res) => {
  const [viajes, testimoniales] = await Promise.all([
    Viaje.findAll({ limit: 3 }),
    Testimoniales.findAll({ limit: 3 }),
  ]);
  res.render("inicio", {
    pagina: "Inicio",
    clase: "home",
    viajes,
    testimoniales,
  });
};

export const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

export const paginaViajes = async (req, res) => {
  const viajes = await Viaje.findAll();
  res.render("viajes", {
    pagina: "Próximos viajes",
    viajes,
  });
};

export const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimoniales.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (err) {
    console.log(err);
  }
};

export const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;
  const viaje = await Viaje.findOne({ where: { slug } });
  res.render("detalle-viaje", {
    pagina: "Viaje",
    viaje,
  });
};
