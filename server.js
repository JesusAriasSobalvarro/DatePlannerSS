var express = require('express')
var bodyParser = require('body-parser')

var cors = require('cors')
var home = require('./routes/home')

var port = 5000

var app = express()

//Setup CORS
app.use(cors())

//Setup Routes
app.use('/', home)

//Setup BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.listen(port, function() {
  console.log('Server started on port ' + port)
})