const db = require("../models");
const config = require("../config/auth.config");
const user = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save user to Database
  console.log(req.body.email)
  user.create({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      res.send({ message: "user registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  user.findOne({
    where: {
      email: req.body.email || ""
    }
  })
    .then(user => {
      if (!user) {
        return res.status(201).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(201).send({
          accessToken: null,
          message: "user not found!"
        });
      }

      const token = jwt.sign({ id: user.id },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400*30, // 24 hours
                              });

      res.status(200).send({
        id: user.id,
        name: user.name,
        email: user.email,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
