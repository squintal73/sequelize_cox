const Sequelize = require('sequelize');

const environment = process.env.NODE_ENV || 'development';

const config = require("../config/config.js")[environment];

const sequelize = new Sequelize(

  config.database.name,     //'grp3_050121', 'postgres', 'postgres', {
  config.database.user,    //'localhost',
  config.database.password,    //'25432',{
  config.database.host,
  config.database.dialect

);
