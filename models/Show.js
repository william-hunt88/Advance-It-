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
    date: {
      // what time will you be loading in?
      type: DataTypes.STRING,
      allowNull: false,
    },
    band_name: {
      // what time will you be loading in?
      type: DataTypes.STRING,
      allowNull: false,
    },
    load_in: {
      // what time will you be loading in?
      type: DataTypes.STRING,
      allowNull: false,
    },
    soundcheck: {
      // what time do you want to soundcheck?
      type: DataTypes.STRING,
      allowNull: false,
    },
    extra_deets: {
      // Any extra details?
      type: DataTypes.STRING,
      allowNull: true,
    },
    input_list: {
      // upload an image of your input list.
      type: DataTypes.STRING,
      allowNull: false,
    },
    stage_plot: {
      // upload your stage plot?
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
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
