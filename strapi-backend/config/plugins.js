module.exports = ({ env }) => {
	return {
		migrations: {
			enabled: true,
			config: {
				autoStart: true,
				migrationFolderPath: "migrations",
			},
		},
	};
};
