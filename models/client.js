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

function createOne(jsonClient) {
	jsonClient.id = clients.length + 1;
	clients.push(jsonClient);
	return jsonClient;
}

function getOneClient(idValue) {
	let index = indexById(idValue)
	if (index != undefined) {
		return clients[index]
	}

	return undefined
}

function indexById(idValue) {
	for (var i = 0; i < clients.length; i++) {
		if (clients[i].id == idValue) {
			return i;
		}
	}
	return undefined
}

function update(idValue, clientJSON) {
	index = indexById(idValue)
	if (index != undefined){
		clients[index] = clientJSON
		return clientJSON
	}

	return undefined
}

function deleteOne(idValue) {
	index = indexById(idValue)
	if (index != undefined){
		delete clients[index];
		return true
	}
	return false
}

module.exports.getClients = getClients
module.exports.getOneClient = getOneClient
module.exports.createOne = createOne
module.exports.update = update
module.exports.deleteOne = deleteOne