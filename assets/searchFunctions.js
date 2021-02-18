/* eslint-disable consistent-return */
/* eslint-disable func-names */
const fs = require('fs');

module.exports.characters = async (search) => {
	try {
		const json = require(`./characters/${search}`);
		return json;
	} catch (err) {
		return null;
	}
};

module.exports.weapons = async (search) => {
	try {
		const json = require(`./weapons/${search}`);
		return json;
	} catch (err) {
		return null;
	}
};

module.exports.elements = async (search) => {
	try {
		const json = require(`./elements/${search}`);
		return json;
	} catch (err) {
		return null;
	}
};

module.exports.potions = async (search) => {
	try {
		const json = require(`./potions/${search}`);
		return json;
	} catch (err) {
		return null;
	}
};

module.exports.fetchCharacters = async () => {
	const files = fs.readdirSync('assets/characters');
	const charArray = [];

	for (const charFile of files) {
		const json = require(`./characters/${charFile}`);
		charArray.push(json);
	}

	return charArray;
};

