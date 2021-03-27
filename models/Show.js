const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");


class Show extends Model {}

Show.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        load_in: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        extra_deets: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        soundcheck: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        input_list: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stage_plot: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "show",
      }
);

module.exports = Show;