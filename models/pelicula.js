const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Pelicula = sequelize.define('Pelicula', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING
  },
  director: {
    type: DataTypes.STRING
  },
  anio: {
    type: DataTypes.INTEGER
  },
  genero: {
    type: DataTypes.STRING
  }
});

module.exports = Pelicula;