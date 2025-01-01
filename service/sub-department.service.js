const { where } = require("sequelize");
const { SubDepartment } = require("../entity/sub-department");

module.exports = {
  createSubDepartment: async (subDepartmentPayload) => {
    try {
      const createdDepartment = await SubDepartment.create(
        subDepartmentPayload
      );
      return createdDepartment;
    } catch (error) {
      throw new Error(error);
    }
  },
  getSubDepartment: async (departmentId) => {
    try {
      const fetchDepartments = await SubDepartment.findAll({
        where: {
          departmentId,
        },
      });
      return fetchDepartments;
    } catch (error) {
      throw new Error(error);
    }
  },
};
