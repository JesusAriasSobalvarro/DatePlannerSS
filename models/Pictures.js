const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  "pictures_table", 
  {
    picture_url : {
      type: Sequelize.STRING
    },
    places_table_id_place : {
      type : Sequelize.INTEGER,
      primaryKey: true
    }
  },
  {
    schema: 'dateplanner',
    timestamps : false,
    freezeTableName: true
  }
)