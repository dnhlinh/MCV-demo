const clients = [
	{ 
	firstname: "Linh", 
	lastname: "Do", 
	id: 1
	},

	{
	 firstname: "Peter",
	 lastname: "Pan",
	 id: 2
	},

	{
	 firstname: "Matt",
	 lastname: "berr",
	 id: 3
	}
];

function getClients() {
	return clients;
}

function find(key) {
	for key in clients {
		return key + ": " + clients[key];
	}

}

function findone(idvalue) {
	for id in clients {
		if clients[id] = idvalue {
			return clients[firstname, lastname]
		}
	}
}

function updateone(idvalue, firstnameUpdate, lastnameUpdate) {	

}

function deleteone(idvalue, firstnameUpdate, lastnameUpdate) {	

}

module.exports.getClient = getClient
module.exports.find = find
module.export.findone = findone
module.export.updateone = updateone
module.export.deleteone = deleteone
