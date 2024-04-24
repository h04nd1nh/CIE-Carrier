module.exports = (sequelize, Sequelize) => {
    const userSkill = sequelize.define(
      "user_skill",
      {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          email: {
            type: Sequelize.STRING,
            unique: true
          },
          mobile_phone: {
            type: Sequelize.STRING,
            unique: true
          },
          name: {
            type: Sequelize.STRING,
          },
          address: {
            type: Sequelize.STRING,
          },
          password: {
            type: Sequelize.STRING,
          },
          image: {
            type: Sequelize.STRING,
          },
          created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
          },
          updated_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
          },
        },
      {
        tableName: "user_skill",
      }
    );
  
    return userSkill;
  };