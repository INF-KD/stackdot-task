const {
  STATUS_CODE: { OK, INTERNAL_SERVER_ERROR, CREATED },
} = require("../utils/constants");
const departmentService = require("../service/department.service");
const { commonResponse } = require("../utils/common");

module.exports = {
  createDepartment: async (req, res) => {
    try {
      const createResult = await departmentService.createDepartment(req.body);
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
  getDepartment: async (req, res) => {
    try {
      const fetchResult = await departmentService.getDepartment();
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
