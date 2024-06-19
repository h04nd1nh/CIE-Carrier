const db = require("../models");
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const { Sequelize, DataTypes } = require('sequelize');

const PrimaryMajor = db.primary_major; // Đảm bảo PrimaryMajor được import và sử dụng chính xác

const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");

exports.createUserResource = async (req, res) => {
  // const token = req.headers["access_token"];
  // if (!token) {
  //   return res.status(401).send({ message: "No token provided!" });
  // }
  
  try {
    // const decoded = jwt.verify(token, config.secret, {
    //   algorithms: ["HS256"],
    // });
    // const userId = decoded.id;

    const { name, email, phone, address, experiences, hardSkills, softSkills, awards } = req.body;
    const _experiences = [];
    const _awards = [];
    const _softSkills = [];
    const _hardSkills = [];

    experiences.forEach((exp) => {
      _experiences.push(exp);
      // Sử dụng các giá trị lấy được ở đây
    });

    softSkills.forEach((soft_skill) => {
      _softSkills.push(soft_skill);
    });

    hardSkills.forEach((hard_skill) => {
      _hardSkills.push(hard_skill);
    });

    awards.forEach((pr) => {
      _awards.push(pr);
      // Sử dụng các giá trị lấy được ở đây
    });

    if (!name && !email && !phone && !address && !experiences && !hardSkills && !softSkills && !awards) {
      return res.status(400).send({
        message: "Invalid information",
      });
    }

    // Gửi yêu cầu đến service suggest
    const response = await fetch("http://127.0.0.1:5000/api/service/suggest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Xử lý phản hồi từ service suggest
    const responseData = await response.json();
    console.log("Response:", responseData);

    // Lấy danh sách recommend từ phản hồi
    const recommendations = responseData.result
      .map((item) => item.recommend)
      .flat();

    // Tìm danh sách ID của các primary_title từ recommendations
    const idList = await findPrimaryTitles(recommendations);
    console.log(idList);
    // Trả về response JSON với danh sách ID
    return res.status(200).send({
      message: "Successfully",
      recommendations: idList,
    });

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({
      message: "Error when processing request",
      error: error.toString(),
    });
  }
};

async function findPrimaryTitles(recommendations) {
    try {
      // Tìm các primary_title dựa trên recommendations
      const primaryTitles = await PrimaryMajor.findAll({
        attributes: ['id', 'sub_title_1'], // Lấy cả ID và sub_title_1
        where: {
          primary_title: {
            [Sequelize.Op.in]: recommendations,
          },
        },
      });
  
      // Chuyển đổi thành danh sách các đối tượng { id: id, sub_title_1: sub_title_1 }
      const idList = primaryTitles.map(item => ({
        id: item.id,
        sub_title_1: item.sub_title_1
      }));
  
      return idList;
    } catch (error) {
      console.error('Lỗi khi tìm primary_title:', error);
      throw error; // Xử lý lỗi tại đây nếu cần thiết
    }
  }