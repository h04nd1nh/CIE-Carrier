const db = require("../models");
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const { Sequelize, DataTypes } = require('sequelize');

const PrimaryMajor = db.primary_major; // Đảm bảo PrimaryMajor được import và sử dụng chính xác

const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");

exports.findMajorbyID = async (req, res) => {
    const { primary_major_id } = req.query; // Lấy primary_major_id từ request parameters

    try {
      const primaryMajor = await PrimaryMajor.findOne({
        where: { id: primary_major_id },
      });
  
      if (!primaryMajor) {
        return res.status(404).json({ message: `Không tìm thấy primary_major với id ${primary_major_id}` });
      }
  
      return res.status(200).json({ primary_major: primaryMajor });
    } catch (error) {
      console.error('Lỗi khi tìm kiếm primary_major:', error);
      return res.status(500).json({ message: 'Lỗi khi tìm kiếm primary_major' });
    }
}

exports.findAllPrimaryMajors = async (req, res) => {
    try {
      const primaryMajors = await PrimaryMajor.findAll({
        order: [['id', 'ASC']] // Sắp xếp theo id tăng dần (ASC)
      });
      
      return res.status(200).json({ primary_majors: primaryMajors });
    } catch (error) {
      console.error('Lỗi khi lấy danh sách primary majors:', error);
      return res.status(500).json({ message: 'Lỗi khi lấy danh sách primary majors' });
    }
  };