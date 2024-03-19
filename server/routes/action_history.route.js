const { authJwt } = require("../middleware");
const controller = require("../controllers/action_history.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/action/checkin", [authJwt.verifyToken], controller.checkin);
  app.post("/api/action/checkout", [authJwt.verifyToken], controller.checkout);

};
