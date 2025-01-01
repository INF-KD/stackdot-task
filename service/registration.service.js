const { Registration } = require("../entity/registration");

module.exports = {
  register: async (registerPayload) => {
    try {
      return await Registration.create(registerPayload);
    } catch (error) {
      throw new Error(error);
    }
  },
};
