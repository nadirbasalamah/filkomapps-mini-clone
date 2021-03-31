exports.errorResponse = (obj) => {
  return obj.response.status(obj.code).json(obj.error);
};

exports.serverErrResponse = (obj) => {
  obj.response.status(obj.code).send(obj.error);
};
