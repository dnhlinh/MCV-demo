let organizations = [
	{
    id: 1,
    name: "Org A",
	},
	{
    id: 2,
    name: "Org B",
	},
	{
    id: 3,
    name: "Org C",	
	}
];

function getOrganization() {
	return organizations;
}

function getOneOrganization(idValue) {
	let index = indexbyID(idValue)
	if (index != undefined) {
		return organizations[index]
	}
	return undefined
}

function createOne(jsonOrganization) {
    jsonOrganization.id = organizations.length + 1;
    organizations.push(jsonOrganization);
	return jsonOrganization;
}

function indexbyID(idValue) {
	for(var i = 0; i < organizations.length; i++) {
		if (organizations[i].id == idValue) {
			return i;
		}
	}
	return undefined
}

function update(idValue, jsonOrganization) {
	let index = indexbyID(idValue)
	if (index != undefined) {
		organizations[index].name = jsonOrganization.name
		return organizations[index]
	}
}

function deleteOne(idValue) {
    let index = indexbyID(idValue)
	if (index != undefined) {
        delete organizations[index]
        return true
    }
    return false
}

module.exports.getOrganization = getOrganization
module.exports.getOneOrganization = getOneOrganization
module.exports.createOne = createOne
module.exports.update = update
module.exports.deleteOne = deleteOne
module.exports.indexbyID = indexbyID