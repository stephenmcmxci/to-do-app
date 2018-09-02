const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

// serve static assets
app.use(express.static(__dirname + '/public'))

// Handle all routes
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server initiated on port " + port)