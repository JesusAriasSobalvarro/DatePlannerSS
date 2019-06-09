const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  "events_table", 
  {
    id_event : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement : true
    },
    event_name : {
      type : Sequelize.STRING
    },
    time_of_event : {
      type: Sequelize.STRING
    },
    event_description : {
      type: Sequelize.STRING
    },
    users_table_id_user:{
      type : Sequelize.INTEGER
    },
      places_table_id_place : {
        type: Sequelize.INTEGER
      }
  }, 
  {
    schema: 'dateplanner',
    timestamps : false,
    freezeTableName: true
  }
)