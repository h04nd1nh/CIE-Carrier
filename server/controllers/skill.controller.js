const db = require("../models");
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const { Sequelize, DataTypes } = require('sequelize');

const soft_skill = db.soft_skill; // Đảm bảo PrimaryMajor được import và sử dụng chính xác
const hard_skill = db.hard_skill;
const { Op } = Sequelize;
const bcrypt = require("bcryptjs");


exports.findSoftSkillsByStartsWith = async (req, res) => {
    const { start_with  } = req.query; // Lấy giá trị startsWith từ query parameters

    try {
        const softSkills = await soft_skill.findAll({
            where: {
                skill_name: {
                    [Op.startsWith]: start_with 
                }
            },
            order: [['skill_name', 'ASC']] // Sắp xếp theo skill_name tăng dần (ASC)
        });

        return res.status(200).json({ soft_skills: softSkills });
    } catch (error) {
        console.error('Lỗi khi tìm kiếm soft skills:', error);
        return res.status(500).json({ message: 'Lỗi khi tìm kiếm soft skills' });
    }
};

exports.findHardSkillsByStartsWith = async (req, res) => {
    const { start_with  } = req.query; // Lấy giá trị startsWith từ query parameters

    try {
        const hardSkills = await hard_skill.findAll({
            where: {
                skill_name: {
                    [Op.startsWith]: start_with 
                }
            },
            order: [['skill_name', 'ASC']] // Sắp xếp theo skill_name tăng dần (ASC)
        });

        return res.status(200).json({ hard_skills: hardSkills });
    } catch (error) {
        console.error('Lỗi khi tìm kiếm :', error);
        return res.status(500).json({ message: 'Lỗi khi tìm kiếm ' });
    }
};
