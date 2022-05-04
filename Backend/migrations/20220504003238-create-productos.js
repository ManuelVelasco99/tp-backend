'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('productos', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		id_categoria: {
			allowNull: false,
			type: Sequelize.INTEGER,
			references: {
				model: 'categoria',
				key: 'id',
			},
			onUpdate: "RESTRICT",
			onDelete: "RESTRICT",
		},
		nombre: {
			allowNull: false,
			type: Sequelize.STRING
		},
		descripcion: {
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
		await queryInterface.dropTable('productos');
	}
};