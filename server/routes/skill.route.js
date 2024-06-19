const { authJwt } = require("../middleware");
const controller = require("../controllers/skill.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/soft_skill", controller.findSoftSkillsByStartsWith);

  app.get("/api/hard_skill", controller.findHardSkillsByStartsWith);

};
