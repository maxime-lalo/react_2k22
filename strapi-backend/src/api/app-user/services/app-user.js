/**
 * app-user service.
 */

const ErrorMessage = require("../../../enums/ErrorMessage");
const axios = require("axios");

class UserServices {
	static async find(
		query = {},
		populate = [],
		select = undefined,
		rawPagination = null,
		orderBy = null
	) {}

	static findOne(query = {}, populate = [], select = undefined) {}

	static findOneByAddress(userAddress) {
		return strapi.db.query("api::app-user.app-user").findOne({
			where: {
				userAddress,
			},
		});
	}

	static async create(userAddress, pseudo, password) {
		return strapi.db.query("api::app-user.app-user").create({
			data: {
				userAddress,
				pseudo,
				password,
			},
		});
	}

	static async update(projectName, userAddress, data) {}

	static async delete(projectName, userAddress, token, user) {}
}

module.exports = UserServices;
