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

function findById(idValue) {
	for(var i = 0; i < clients.length; i++) {
		if (clients[i].id == idValue) {
			return clients[i].id;
		}
	
function update(idValue) {
	for(var i = 0; i < clients.length; i++) {
		if(clients[i].id == idValue) {
			clients[i].firstname = "Linh02";
			clients[i].lastname = "Do02";
			return clients[i];
		}
	}
}

function deleteOne(idValue) {
	for(var i = 0; i < clients.length; i++) {
		if(clients[i].id == idvalue) {
			delete clients[i];
			return clients;	
		}	
	}
}

module.exports.getClients = getClients
module.exports.createOne = createOne
module.exports.findById = findById
module.exports.update = update
module.exports.deleteOne = deleteOne