
const express = require('express')
const router = express()

// Import Clients Model for database 
const ClientModel = require('../models/client')

// List clients with reduced information
router.get('/', function(req,res) {
  let list =	ClientModel.getClients(); // list or []
	res.json({clients: list})
})

// Return single Client This have all the information
router.get('/:id', function(req,res) {
	let client = ClientModel.getOneClient(req.params.id) // client or undefined
	if(client) {
	 	res.status(200).json(client)
	}
	else {
		res.status(404).json({error: "Client not found"})
	}
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
router.put('/:id', function(req,res){
	let updateClient = ClientModel.update(req.params.id, req.body)
	if (updateClient) {
			res.status(200).json(updateClient)
	}
	else {
			res.status(404).json({error: "Client not found"})
	}
})

// Delete a Client by ID
router.delete('/:id', function(req,res) {
		let deleteClient = ClientModel.deleteOne(req.params.id)
		if (deleteClient) {
			res.status(200).json({result: "Successfully deleted"})
		}
		else {
			res.status(500).json({result: "Something went wrong"})
		}
})

module.exports = router