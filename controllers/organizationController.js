
const express = require('express')
const router = express()

// Import Organization Model for database
const OrganizationModel = require('../models/organization')

// List Organization with reduced information
router.get('/', function(req,res) {
  let list =	OrganizationModel.getOrganization(); // list or []
	res.json({organizations: list})
})

// Return single Organization This have all the information
router.get('/:id', function(req,res) {
	let organization = OrganizationModel.getOneOrganization(req.params.id) // organization or undefined
	if(organization != undefined) {
	 	res.status(200).json(organization)
	}
	else {
		res.status(404).json({error: "Client not found"})
	}
})


// Create a New Organization
router.post('/', function(req, res) {
	let newOrg = OrganizationModel.createOne(req.body)
	if(newOrg) {
		res.json({organization: newOrg})
	}
	else {
		res.json({error: 'Client can\'t be created'})
	}
})

// Edit a Organization
router.put('/:id', function(req,res){
	let updateOrg = OrganizationModel.update(req.params.id, req.body)
	if (updateOrg) {
			res.status(200).json(updateOrg)
	}
	else {
			res.status(404).json({error: "Client not found"})
	}
})

// Delete a Organization by ID
router.delete('/:id', function(req,res) {
		let deleteOrg = OrganizationModel.deleteOne(req.params.id)
		if (deleteOrg == true) {
			res.status(200).json({result: "Successfully deleted"})
		}
		else {
			res.status(500).json({result: "Something went wrong"})
		}
})

module.exports = router