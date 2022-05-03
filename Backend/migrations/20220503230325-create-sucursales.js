'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Sucursales', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		nombre: {
			allowNull: false,
			type: Sequelize.STRING
		},
		eliminado: {
			allowNull: false,
			defaultValue: false,
			type: Sequelize.BOOLEAN
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE
		}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Sucursales');
	}
};