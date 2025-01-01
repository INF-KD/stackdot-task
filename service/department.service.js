const { Department } = require("../entity/department");

module.exports = {
  createDepartment: async (departmentPayload) => {
    try {
      const createdDepartment = await Department.create(departmentPayload);
      return createdDepartment;
    } catch (error) {
      throw new Error(error);
    }
  },
  getDepartment: async () => {
    try {
      const fetchDepartments = await Department.findAll();
      return fetchDepartments;
    } catch (error) {
      throw new Error(error);
    }
  },
};
