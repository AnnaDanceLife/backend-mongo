const { PORT, API_URL } = process.env;

const loggerOne = (request, response, next) => {
  console.log(`An origin url: ${request.originalUrl}`);
  console.log("Request Type:", request.method);

  next();
};

module.exports = loggerOne;
