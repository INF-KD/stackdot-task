const { DataTypes } = require("sequelize");
const { dbPool } = require("../configs/db.config");

const Registration = dbPool.define("registration", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
});
module.exports = {
  Registration,
};
