const crypto = require("crypto");

module.exports = ({ env }) => ({
	auth: {
		secret: crypto.randomBytes(16).toString("base64"),
	},
	apiToken: {
		salt: env("API_TOKEN_SALT"),
	},
	watchIgnoreFiles: ["**/config/sync/**"],
});
