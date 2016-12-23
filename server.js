var express = require('express')
var path = require('path')

var app = express()
var PORT = 8080

app.use('/Cesium', express.static(path.join(__dirname, 'node_modules', 'cesium', 'Build', 'Cesium')))
app.use('/data', express.static(path.join(__dirname, 'data')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, function() {
    console.log('Server started on port', PORT)
})
