module.exports = (sequelize, Sequelize) => {
    const Skill = sequelize.define(
      "skill",
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
        tableName: "skill",
      }
    );
  
    return Skill;
  };