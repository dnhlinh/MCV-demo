
const express = require('express')
const router = express()

// Import project Model for database
const ProjectModel = require('../models/project')

// List project with reduced information
router.get('/', function(req,res) {
  let list = ProjectModel.getProject(); // list or []
	res.json({organizations: list})
})

// Return single project This have all the information
router.get('/:id', function(req,res) {
	let project = ProjectModel.getOneProject(req.params.id) // project or undefined
	if(project != undefined) {
	 	res.status(200).json(project)
	}
	else {
		res.status(404).json({error: "Project not found"})
	}
})


// Create a New project
router.post('/', function(req, res) {
	let newProject = ProjectModel.createOne(req.body)
	if(newProject != undefined) {
		res.status(201).json({project: newProject})
	}
	else {
		res.status(400).json({error: "Invalid organization ID"})
	}
})

// Edit a project
router.put('/:id', function(req,res){
	let updateProject = ProjectModel.update(req.params.id, req.body)
	if (updateProject != undefined && updateProject != false) {
		res.status(200).json(updateProject)
    }
    else if (updateProject == false) {
        res.status(400).json({error: "Invalid organization ID"})
    }
	else {
		res.status(404).json({error: "Project not found"})
	}
})

// Delete a Organization by ID
router.delete('/:id', function(req,res) {
		let deleteProject = ProjectModel.deleteOne(req.params.id)
		if (deleteProject == true) {
			res.status(200).json({result: "Successfully deleted"})
		}
		else {
			res.status(404).json({result: "Something went wrong"})
		}
})

module.exports = router