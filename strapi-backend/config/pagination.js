module.exports = {
	sanitize: (pagination) => {
		const defaultValue = {
			page: 1,
			pageSize: 50,
		};
		if (!pagination) {
			return defaultValue;
		}
		return {
			page: Math.max(defaultValue.page, pagination.page ?? defaultValue.page),
			pageSize: Math.min(defaultValue.pageSize, pagination.pageSize ?? defaultValue.pageSize),
		};
	},
	toQuery: (pagination) => {
		return {
			offset: (pagination.page - 1) * pagination.pageSize,
			limit: pagination.pageSize,
		};
	},
};
