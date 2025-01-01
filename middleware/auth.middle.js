const jsonwebtoken = require("jsonwebtoken");
const {
  STATUS_CODE: { FORBIDDEN },
} = require("../utils/constants");
const { commonResponse } = require("../utils/common");

const { JWT_SECRET } = process.env;
module.exports = {
  jwtMiddleware: (req, res, next) => {
    const auth = req.headers?.authorization;
    if (auth) {
      const jwtToken = auth.split(" ")[1];
      const data = jsonwebtoken.verify(jwtToken, JWT_SECRET);
      req.userData = data;
      next();
    } else {
      return res
        .status(FORBIDDEN)
        .send(commonResponse("This resource is forbidden", null, FORBIDDEN));
    }
  },
};
