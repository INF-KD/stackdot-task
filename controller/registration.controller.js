const {
  STATUS_CODE: { OK, INTERNAL_SERVER_ERROR, CREATED },
} = require("../utils/constants");
const { commonResponse } = require("../utils/common");
const registrationService = require("../service/registration.service");

module.exports = {
  registration: async (req, res) => {
    try {
      const registerResult = await registrationService.register(req.body);
      return res
        .status(CREATED)
        .send(commonResponse(`Registred Successfully`, registerResult, OK));
    } catch (error) {
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send(
          commonResponse(
            "Registration Failed",
            error.message,
            INTERNAL_SERVER_ERROR
          )
        );
    }
  },
};
