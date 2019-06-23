let projects = [
	{
    id: 1,
    name: "Project A",
    organization_id: 1,
	},
	{
    id: 2,
    name: "Project B",
    organization_id: 2,
	},
	{
    id: 3,
    name: "Project C",	
    organization_id: 3,
	}
];

const OrganizationModel = require('./organization')

function orgIdValidation (idValue) {
    let IdValidation = OrganizationModel.indexbyID(idValue)
    if (IdValidation != undefined) {
        return true
    }
    return false
}

function getProject() {
	return projects;
}

function getOneProject(idValue) {
	let index = indexbyID(idValue)
	if (index != undefined) {
		return projects[index]
	}
	return undefined
}

function createOne(jsonProject) {
    let validId = orgIdValidation(jsonProject.organization_id)
    if (validId == true) {
        jsonProject.id = projects.length + 1
        projects.push(jsonProject);
        return jsonProject;
    }
    return undefined
}

function indexbyID(idValue) {
	for(var i = 0; i < projects.length; i++) {
		if (projects[i].id == idValue) {
			return i;
		}
	}
	return undefined
}

function update(idValue, jsonProject) {
    let validID = orgIdValidation(jsonProject.organization_id)
    let index = indexbyID(idValue)
    if (index != undefined) {
        if (validID == true) {
            projects[index].name = jsonProject.name
            return projects[index]
        }
        else {
            return false
        }
    }
    return undefined
}

function deleteOne(idValue) {
    let index = indexbyID(idValue)
	if (index != undefined) {
        delete projects[index]
        return true
    }
    return false
}

module.exports.getProject = getProject
module.exports.getOneProject = getOneProject
module.exports.createOne = createOne
module.exports.update = update
module.exports.deleteOne = deleteOne
module.exports.indexbyID = indexbyID