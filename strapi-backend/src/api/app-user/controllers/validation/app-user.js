const { yup, validateYupSchema } = require("@strapi/utils");
const ethers = require("ethers");
const createUserBodySchema = yup.object().shape({
	userAddress: yup
		.string()
		.required()
		.test(
			"validAddress",
			"userAddress must be a valid ether address",
			(val) => {
				return ethers.utils.isAddress(val);
			}
		),
	pseudo: yup.string().required(),
	password: yup.string().required(),
});

const updateUserBodySchema = yup.object().shape({});

const deleteUserBodySchema = yup.object().shape({});

module.exports = {
	validateCreateUserBody: validateYupSchema(createUserBodySchema),
	validateUpdateUserBody: validateYupSchema(updateUserBodySchema),
	validateDeleteUserBody: validateYupSchema(deleteUserBodySchema),
};
