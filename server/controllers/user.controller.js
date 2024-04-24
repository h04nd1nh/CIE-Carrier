const db = require("../models");
const config = require("../config/auth.config");

const user = db.user
const experience = db.experience
const academic = db.academic
const user_skill = db.user_skill
const prize = db.prize

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.createUserResource = (req, res) => {
    const { information, experience, academic, prize } = req.body;
    const info = information[0];
    const { name, email, mobile_phone, address } = info;

    experience.forEach(exp => {
        const { degree_experience, major_experience, company_experience, description_experience } = exp;
        // Sử dụng các giá trị lấy được ở đây
    });

    academic.forEach(acad => {
        const { school, major_academic, degree_academic, major_subject_1, major_subject_2, major_subject_3 } = acad;
        // Sử dụng các giá trị lấy được ở đây
    });

    prize.forEach(pr => {
        const { prize_name, prize_organization, prize_date } = pr;
        // Sử dụng các giá trị lấy được ở đây
    });

    const allFieldsProvided 
    = information.every(exp => {
        return exp.hasOwnProperty('name') &&
               exp.hasOwnProperty('email') &&
               exp.hasOwnProperty('mobile_phone') &&
               exp.hasOwnProperty('address');
    }) 
    && experience.every(exp => {
        return exp.hasOwnProperty('degree_experience') &&
               exp.hasOwnProperty('major_experience') &&
               exp.hasOwnProperty('company_experience') &&
               exp.hasOwnProperty('description_experience');
    }) 
    && academic.every(acad => {
        return exp.hasOwnProperty('school') &&
               exp.hasOwnProperty('major_academic') &&
               exp.hasOwnProperty('degree_academic') &&
               exp.hasOwnProperty('major_subject_1') &&
               exp.hasOwnProperty('major_subject_2') &&
               exp.hasOwnProperty('major_subject_3');
    }) 
    && prize.every(pr => {
        return exp.hasOwnProperty('prize_name') &&
               exp.hasOwnProperty('prize_organization') &&
               exp.hasOwnProperty('prize_date');
    });



    if(!allFieldsProvided) {
        return res.status(400).send({
            message: "Invalid infomation"
        })
    } else {
        try {

        } catch (err) {
            return res.status(500).json({
                message: "Error when create record"
            })
        }
    }

};

