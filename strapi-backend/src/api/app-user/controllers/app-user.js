/**
 *  app-user controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const UserServices = require("../services/app-user");
const ErrorMessage = require("../../../enums/ErrorMessage");
const { errors } = require("@strapi/utils");
const {
	validateUpdateUserBody,
	validateDeleteUserBody,
	validateCreateUserBody,
} = require("./validation/app-user");

const crypto = require("crypto");

module.exports = createCoreController("api::app-user.app-user", () => ({
	async find(ctx) {},

	async findOne(ctx) {},

	async create(ctx) {
		const { body } = ctx.request;

		try {
			await validateCreateUserBody(body);
			const alreadyExist = await UserServices.findOneByAddress(
				body.userAddress
			);
			if (alreadyExist) throw new Error(ErrorMessage.USER_ALREADY_EXIST);
		} catch (err) {
			if (err instanceof errors.YupValidationError) {
				return ctx.badRequest(err, { ...err.details });
			}
			return ctx.badRequest(err);
		}
		const user = await UserServices.create(
			body.userAddress,
			body.pseudo,
			crypto.createHash("sha1").update(body.password).digest("hex")
		);
		return ctx.send({ user }, 201);
	},

	async update(ctx) {},

	async delete(ctx) {},
}));
