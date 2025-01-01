const { DataTypes } = require("sequelize");
const { dbPool } = require("../configs/db.config");

const User = dbPool.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});
module.exports = {
  User,
};
