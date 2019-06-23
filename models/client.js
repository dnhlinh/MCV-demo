let clients = [
	{
	 firstname: "Linh",
	 lastname: "Do",
     id: 1,
     project_id: 3
	},
	{
	 firstname: "Peter",
	 lastname: "Pan",
     id: 2,
     project_id: 2
	},
	{
	 firstname: "Matt",
	 lastname: "berr",
     id: 3,
     project_id: 1
	}
];

const ProjectModel = require('./project')

function ProjectIdValidation (idValue) {
    let IdValidation = ProjectModel.indexbyID(idValue)
    if (IdValidation != undefined) {
        return true
    }
    return false
}

function getClients() {
	return clients;
}

function getOneClient(idValue) {
	const index = findbyID(idValue)
	if (index != undefined) {
		return clients[index]
	}
	return undefined
}

function createOne(jsonClient) {
    let validId = ProjectIdValidation(jsonClient.project_id)
    if (validId == true) {
        jsonClient.id = clients.length + 1;
        clients.push(jsonClient);
        return jsonClient;
    }
    return undefined
}    

function findbyID(idValue) {
	for(var i = 0; i < clients.length; i++) {
		if (clients[i].id == idValue) {
			return i;
		}
	}
	return undefined
}

function update(idValue, jsonClient) {
    const index = findbyID(idValue)
    let validID = ProjectIdValidation(jsonClient.project_id)
	if (index != undefined) {
        if (validID == true) {
            clients[index].firstname = jsonClient.firstname
            clients[index].lastname = jsonClient.lastname
            return clients[index]
        }
        else {
            return false
        }
    }
    return undefined
}

function deleteOne(idValue) {
    const index = findbyID(idValue)
	if (index != undefined) {
        delete clients[index]
        return true
    }
    return false
}

module.exports.getClients = getClients
module.exports.getOneClient = getOneClient
module.exports.createOne = createOne
module.exports.update = update
module.exports.deleteOne = deleteOne