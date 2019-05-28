var express = require('express')
app = express()
port = process.env.PORT || 3000
mongoose = require('mongoose')
User = require('./api/models/userListModel')
Accounts = require('./api/models/userListModel')
bodyParser = require('body-parser')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/admin', function(error){
    if(error) throw error
    console.log('Successfully connected');
})
var cors = require('cors')
 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/userListRoutes')
routes(app)

app.listen(port)

console.log('User List started on : '+ port)