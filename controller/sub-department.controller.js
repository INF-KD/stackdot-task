const {
  STATUS_CODE: { OK, INTERNAL_SERVER_ERROR, CREATED },
} = require("../utils/constants");
const departmentService = require("../service/sub-department.service");
const { commonResponse } = require("../utils/common");
module.exports = {
  createSubDepartment: async (req, res) => {
    try {
      const createResult = await departmentService.createSubDepartment(
        req.body
      );
      return res
        .status(CREATED)
        .send(
          commonResponse(`Department Created Successfully`, createResult, OK)
        );
    } catch (error) {
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send(
          commonResponse(
            "Department Creation Failed",
            error.message,
            INTERNAL_SERVER_ERROR
          )
        );
    }
  },
  getSubDepartment: async (req, res) => {
    try {
      const departmentId = req.query;
      const fetchResult = await departmentService.getSubDepartment(
        departmentId
      );
      return res
        .status(CREATED)
        .send(commonResponse(`Department List Fetched`, fetchResult, OK));
    } catch (error) {
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send(
          commonResponse(
            "Department List Fetch Failed",
            error.message,
            INTERNAL_SERVER_ERROR
          )
        );
    }
  },
};
