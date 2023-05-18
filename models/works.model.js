const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	const Works = sequelize.define(
		"works",
		{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
			},
		title: {
			type: DataTypes.STRING,
			allowNull: false
			},
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: false
			}
		},
		{timestamps:false}
	)
	return Works
}
