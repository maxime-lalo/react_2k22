/**
 * app-user router.
 */

module.exports = {
	routes: [
		{
			method: "GET",
			path: "/app-users/:projectName",
			handler: "app-user.find",
			config: {
				auth: false,
				middlewares: [],
			},
		},
		{
			method: "GET",
			path: "/app-users/:projectName/:userAddress",
			handler: "app-user.findOne",
			config: {
				auth: false,
				middlewares: [],
			},
		},
		{
			method: "POST",
			path: "/app-users",
			handler: "app-user.create",
			config: {
				auth: false,
				middlewares: [],
			},
		},
		{
			method: "PUT",
			path: "/app-users/:projectName/:userAddress",
			handler: "app-user.update",
			config: {
				auth: false,
				middlewares: [],
			},
		},
		{
			method: "DELETE",
			path: "/app-users/:projectName/:userAddress",
			handler: "app-user.delete",
			config: {
				auth: false,
				middlewares: [],
			},
		},
	],
};
