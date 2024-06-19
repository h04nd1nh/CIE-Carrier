const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    port: config.POST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    },
    define: {
      timestamps: false,
    },
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.academic = require("../models/academic.model.js")(sequelize, Sequelize);
db.experience = require("../models/experience.model.js")(sequelize, Sequelize);
db.major_recuitment = require("../models/major_recuitment.model.js")(sequelize, Sequelize);
db.primary_major = require("../models/primary_major.model.js")(sequelize, Sequelize);
db.prize = require("../models/prize.model.js")(sequelize, Sequelize);
db.recuitment = require("../models/recuitment.model.js")(sequelize, Sequelize);
db.skill = require("../models/skill.model.js")(sequelize, Sequelize);
db.sub_major = require("../models/sub_major.model.js")(sequelize, Sequelize);
db.user_skill = require("../models/user_skill.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.soft_skill = require("../models/soft_skill.model.js")(sequelize, Sequelize);
db.hard_skill = require("../models/hard_skill.model.js")(sequelize, Sequelize);

module.exports = db;
