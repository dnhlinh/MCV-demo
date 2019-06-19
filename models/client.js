let clients = [
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
	// for key in clients {
	// 	return key + ": " + clients[key];
	// }

}

function findone(idvalue) {
	// for id in clients {
	// 	if clients[id] = idvalue {
	// 		return clients[firstname, lastname]
	// 	}
	// }
}

function updateone(idvalue, firstnameUpdate, lastnameUpdate) {

}

function deleteone(idvalue, firstnameUpdate, lastnameUpdate) {	

}

function createOne(jsonClient) {
	jsonClient.id = clients.length + 1;
	clients.push(jsonClient);

	return jsonClient;
}

module.exports.getClients = getClients
module.exports.createOne = createOne
// module.export.findone = findone
// module.export.updateone = updateone
// module.export.deleteone = deleteone

// module.exports = this