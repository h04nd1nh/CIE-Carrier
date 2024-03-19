const db = require("../models");
const Employee = db.employee;

checkDuplicateEmployeeNameOrEmail = (req, res, next) => {
  // Email
  if (!req.body.email) {
    res.status(400).send({
      message: "Failed! Please input Email!"
    });
    return;
  }
  Employee.findOne({
    where: {
      email: req.body.email
    }
  }).then(employee => {
    if (employee) {
      res.status(400).send({
        message: "Failed! Email is already in use!"
      });
      return;
    }

    next();
  });
};

const verifySignUp = {
  checkDuplicateEmployeeNameOrEmail: checkDuplicateEmployeeNameOrEmail
};

module.exports = verifySignUp;
