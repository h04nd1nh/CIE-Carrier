const db = require("../models");
const config = require("../config/auth.config");
const Employee = db.employee;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save Employee to Database
  Employee.create({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(employee => {
      res.send({ message: "Employee registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  Employee.findOne({
    where: {
      email: req.body.email || ""
    }
  })
    .then(employee => {
      if (!employee) {
        return res.status(201).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        employee.password
      );

      if (!passwordIsValid) {
        return res.status(201).send({
          accessToken: null,
          message: "Employee not found!"
        });
      }

      const token = jwt.sign({ id: employee.id },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400*30, // 24 hours
                              });

      res.status(200).send({
        id: employee.id,
        name: employee.name,
        email: employee.email,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
