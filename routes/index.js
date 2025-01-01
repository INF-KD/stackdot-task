const { getHello } = require("../controller");
const {
  createDepartment,
  getDepartment,
} = require("../controller/department.controller");
const { registration } = require("../controller/registration.controller");
const {
  createSubDepartment,
  getSubDepartment,
} = require("../controller/sub-department.controller");
const { jwtMiddleware } = require("../middleware/auth.middle");

const router = require("express").Router();

router.post("/", getHello);

// Department
router.post("/department", createDepartment);
router.get("/department", getDepartment);

// Sub Department
router.post("/sub-department", createSubDepartment);
router.get("/sub-department", getSubDepartment);

// Registration
router.post("/registration", jwtMiddleware, registration);

module.exports = {
  router,
};
