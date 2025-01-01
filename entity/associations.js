module.exports = (dbPool) => {
  const {
    department,
    "sub-department": subDepartment,
    registration,
    user,
  } = dbPool.models;

  department.hasMany(subDepartment, { foreignKey: "departmentId" });
  subDepartment.belongsTo(department, { foreignKey: "departmentId" });

  department.hasMany(registration, { foreignKey: "departmentId" });
  subDepartment.hasMany(registration, { foreignKey: "subDepartmentId" });

  registration.belongsTo(department, { foreignKey: "departmentId" });
  registration.belongsTo(subDepartment, { foreignKey: "subDepartmentId" });

  registration.belongsTo(user, { foreignKey: "userId" });
  user.hasOne(registration, { foreignKey: "userId" });
};
