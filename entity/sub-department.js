const { DataTypes } = require("sequelize");
const { dbPool } = require("../configs/db.config");

const SubDepartment = dbPool.define("sub-department", {
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
  SubDepartment,
};
