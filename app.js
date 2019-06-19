var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = process.env.port ||9090
var path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))


app.use('/clientsController', require('./controllers/clientsController'))

app.get('/', function(req, res) {
	return res.send('Database')
})

app.listen(port, function() {
	console.log('app listening on port ' + port)
})

//module.exports = app