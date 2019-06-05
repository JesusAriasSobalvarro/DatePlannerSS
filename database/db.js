const Sequelize = require('sequelize')
const db = {}

const sequelize = new Sequelize('	postgres://ffqlwqzk:mWxWaKeUGCIKwBIzkVAtNE4Gzd-F5w-_@raja.db.elephantsql.com:5432/ffqlwqzk', {
  dialect: 'postgres'
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
