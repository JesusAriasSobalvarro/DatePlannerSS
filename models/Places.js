const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  "places_table", 
  {
    id_place : {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    address : {
      type: Sequelize.STRING
    },
    description : {
      type: Sequelize.STRING
    },
    place_name: {
      type: Sequelize.STRING
    }
  }, 
  {
    schema: 'dateplanner',
    timestamps : false,
    freezeTableName: true
  }
)