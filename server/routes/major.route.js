const { authJwt } = require("../middleware");
const controller = require("../controllers/major.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/primary_major", controller.findMajorbyID);

  app.get("/api/primary_major/all", controller.findAllPrimaryMajors);
};
