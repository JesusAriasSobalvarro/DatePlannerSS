const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  "users_table", 
  {
    id_user : {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    first_name : {
      type: Sequelize.STRING
    },
    last_name : {
      type: Sequelize.STRING
    }
  }, 
  {
    schema: 'dateplanner',
    timestamps : false,
    freezeTableName: true
  }
)