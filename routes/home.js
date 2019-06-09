var express = require('express')
var router = express.Router()

const User = require('../models/User')
const Events = require('../models/Events')
const Places = require('../models/Places')
const Pictures = require('../models/Pictures')
const queries = require('../raw_queries/raw_queries')
const db = require('../database/db.js')

Places.hasMany(Events, {
  foreignKey : 'places_table_id_place'
})

Events.belongsTo(Places, {
  foreignKey: 'places_table_id_place',
  targetKey: 'id_place'
})

User.hasMany(Events, {
  foreignKey : 'users_table_id_user'
})

Events.belongsTo(User, {
  foreignKey: 'users_table_id_user',
  targetKey: 'id_user'
})

Places.hasMany(Pictures, {
  foreignKey : 'places_table_id_place'
})

Pictures.belongsTo(Places, {
  foreignKey : 'places_table_id_place',
  targetKey: 'id_place'
})

router.get('/', (req, res, next) => {
  User.findAll()
  .then(users => {
    console.log(users)
    res.json(users)
  })
  .catch(error => {
    res.send('Error: ' + error)
  })
})

router.get('/events/:id', (req, res, next) => {
  Events.findAll({
    include: [{
      model : User,
      where : { 'id_user' : req.params.id},
      required: true
     }, {
       model: Places,
       required: true
     }]
  })
  .then(events => {
    console.log(events)
    res.json(events)
  })
  .catch(error => {
    res.send('Error: ' + error)
  })
})

router.get('/places', (req, res, next) => {
  db.sequelize.query(queries.get_restaurant_list, { raw : true}).then((data) => {
      
      res.json(data[0])
  

   
  })
  .catch(error => {
    res.send('Error ' + error)
  })
})



router.get('/places/pictures/:id', (req, res, next) => {
  Pictures.findAll({
    include: [{
      model : Places,
      where : { 'id_place' : req.params.id},
      required: true
     }]
  })
  .then(events => {
    console.log(events)
    res.json(events)
  })
  .catch(error => {
    res.send('Error: ' + error)
  })
})

router.post('/events/', (req, res, next) => {
  console.log(req.body)
  // console.log(req)
  Events.create({
    places_table_id_place : req.body.id_place,
    event_name : req.body.event_name,
    event_description : req.body.event_description,
    time_of_event : req.body.event_date_time,
    users_table_id_user : req.body.user_id
  })
  .then(() => {
    console.log('ROW INSERTED')
    // res.json(req.body)
  })
  .catch(error => {
    console.log(error)
    res.send('Error: ' + error)
  })
})


module.exports = router