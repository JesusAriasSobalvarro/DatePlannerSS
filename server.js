var express = require('express')
var bodyParser = require('body-parser')

var cors = require('cors')
var home = require('./routes/home')

var port = process.env.PORT || 5000;
var app = express()

//Setup CORS
app.use(cors())

//Setup BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))


//Setup Routes
app.use('/', home)


app.listen(port, function() {
  console.log('Server started on port ' + port)
})