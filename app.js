var Sequelize = require('sequelize');

var sequelize = new Sequelize('grp3_050121', 'postgres', 'postgres', {
  host: 'localhost',
  port: '25432',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  sequelize.query("SELECT numcgm, username FROM administracao.usuario", { type: sequelize.QueryTypes.SELECT})
  .then(function(users) {
     console.log(users)
  })
