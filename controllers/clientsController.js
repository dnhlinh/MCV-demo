const express = require('express')
const router = express()

// Import Clients Model for database 
const clients = require('./models/client')

// List clients
router.get('/', function(req,res) {
	clients.find().sort('lastname').select({__v: 0, id: 0})
	 .then(result => {
	 	res.status(200).json({result: clients})
	 })
	 .catch(err => {
	 	res.status(500).json({message: 'Something went wrong'})
	 })


// Create a New Client
router.post('/', function(req, res) {
	clients.push({
		firstname: 'Lady',
		lastname: 'Gaga',
		id: '3'
	})
})

// Update a Client, only signed user
router.put('/', function(req, res) {
	clients.findone({id: 1}, (error, result) => {
		if(result) {
			clients.updateone({id:1}, {
				firstname: 'Linh2',
				lastname: 'Do2'
			})
		}
		else {
			res.json({error: 'id not found'})
		}
	})

})

// Delete a Client, only signed user
router.delete('/id', function(req, res){
	clients.findone({id: 2}, (err, result) => {
		if(result) {
			clients.deleteone({id: 2})
			 .then((err) => {
			 	res.status(200).json({ result: 'ok'})
			 })
			 .catch(err => {
			 	res.status(500).json({ message: 'Something went wrong', error: err})
			 })
		}
		else {
			res.json({ error: 'id not found'})
		}
	})
})


module.exports = router
