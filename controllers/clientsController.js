
const express = require('express')
const router = express()

// Import Clients Model for database 
const ClientModel = require('../models/client')

// List clients
router.get('/', function(req,res) {
 let list =	ClientModel.getClients();
	res.json({clients: list})
})


// Create a New Client
router.post('/', function(req, res) {
	let newClient = ClientModel.createOne(req.body)

	if(newClient) {
		res.json({client: newClient})
	}
	else {
		res.json({error: 'Client can\'t be created'})
	}
})

// Edit a Client
router.put('/', function(req,res){
	let idFound = ClientModel.findById(req.client.id)  
	if (clientid) {
			let updateClient = ClientModel.update(req.client.id)	
			res.status(200).json({client: updateClient})	
	}
	else {
			res.status(404).json({error: "Client not found"})
	}
})


// Delete a Client, only signed user
// router.delete('/id', function(req, res){
// 	clients.findone({id: 2}, (err, result) => {
// 		if(result) {
// 			clients.deleteone({id: 2})
// 			 .then((err) => {
// 			 	res.status(200).json({ result: 'ok'})
// 			 })
// 			 .catch(err => {
// 			 	res.status(500).json({ message: 'Something went wrong', error: err})
// 			 })
// 		}
// 		else {
// 			res.json({ error: 'id not found'})
// 		}
// 	})
// })


module.exports = router