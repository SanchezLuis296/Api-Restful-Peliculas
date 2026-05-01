const Pelicula = require('../models/pelicula');

exports.getAll = () => Pelicula.findAll();

exports.getById = (id) => Pelicula.findByPk(id);

exports.create = (data) => Pelicula.create(data);

exports.update = async (id, data) => {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  return pelicula.update(data);
};

exports.remove = async (id) => {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  await pelicula.destroy();
  return true;
};