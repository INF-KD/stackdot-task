module.exports = {
  commonResponse: (message, data, status) => {
    return {
      message,
      data,
      status,
    };
  },
};
