/**
 * `middleware-authenticated` middleware.
 */

module.exports = () => async (ctx, next) => {
	// const { body, params, header } = ctx.request;
	// const projectName = body.projectName ?? params.projectName;
	// let project;
	// try {
	// 	project = await ProjectServices.isValidProjectName(projectName);
	// 	await AuthServices.isValidToken(
	// 		header["auth-token"],
	// 		project.secretApiKey
	// 	);
	// } catch (err) {
	// 	ctx.badRequest(err);
	// }

	return await next();
};
