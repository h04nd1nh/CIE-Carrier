const db = require("../models");
const user = db.user;

checkDuplicateuserNameOrEmail = (req, res, next) => {
  // Email
  if (!req.body.email) {
    res.status(400).send({
      message: "Failed! Please input Email!"
    });
    return;
  }
  user.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!"
      });
      return;
    }

    next();
  });
};

const verifySignUp = {
  checkDuplicateuserNameOrEmail: checkDuplicateuserNameOrEmail
};

module.exports = verifySignUp;
