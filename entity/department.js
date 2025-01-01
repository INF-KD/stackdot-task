const { DataTypes } = require("sequelize");
const { dbPool } = require("../configs/db.config");

const Department = dbPool.define("department", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});
module.exports = {
  Department,
};
