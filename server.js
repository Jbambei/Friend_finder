//requires
const express = require('express')
const path = require("path")
const apiRoute = require("./app/routing/apiRoutes")
const htmlRoute = require("./app/routing/htmlRoutes")

//initialize express instance and use it 
const app = express()
var PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/api", apiRoute)
app.use("/", htmlRoute)


//server listening
app.listen(PORT, function() {
    console.log(`Server online. Using Port: ${PORT}`)
})