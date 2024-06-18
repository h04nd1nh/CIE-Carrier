module.exports = (sequelize, Sequelize) => {
    const hard_skill = sequelize.define(
      "hard_skill",
      {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          skill_name: {
            type: Sequelize.STRING,
            unique: true
          },
        },
      {
        tableName: "hard_skill",
      }
    );
  
    return hard_skill;
  };