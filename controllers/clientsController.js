
const express = require('express')
const router = express()

// Import Clients Model for database 
const ClientModel = require('../models/client')

// List clients
router.get('/', function(req,res) {
//  let list =	ClientModel.getClients();
// 	res.json({clients: list})
	let idFound = ClientModel.findById(req.client.id)
	if(idFound) {
	 	let listOne = ClientModel.getOneClient(req.client.id) 
	 	res.status(200).json({client: listOne})
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

// Delete a Client by ID
router.delete('/', function(req,res) {
	let idFound = ClientModel.findById(req.client.id)
	if (idFound) {
		let deleteClient = ClientModel.deleteOne(req.client.id)
		if (deleteClient) {
			res.status(200).json({result: "Successfully deleted"})
		}
		else {
			res.status(500).json({result: "Something went wrong"})
		}	
	}
	else {
			res.status(400).json({err: "Client not found"})
	}
})

module.exports = router