//requires
const express = require('express')
const path = require('path')
// const apiRoute = require("./app/routing/apiRoutes")
// const htmlRoute = require("./app/routing/htmlRoutes")
const friends = require('./data/friends')

//initialize express instance and use it 
var app = express()
var PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

htmlRoutes(app, path)
apiRouteS(app)

app.post('/api/friends', function (req, res) {
    var createFriend = req.body
    friends.push(createFriend)
})

//server listening
app.listen(PORT, function() {
    console.log(`Server online. Using Port: ${PORT}`)
})