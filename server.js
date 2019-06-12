// Express
const express = require('express')
var app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// Routing to Routes files w/ express 
require("./routing/apiRoutes")(app)
require("./routing/htmlRoutes")(app)


//Server Setup
var PORT = process.env.PORT || 8000

app.listen(PORT, function(){
    console.log(`App listening on ${PORT}`)
})