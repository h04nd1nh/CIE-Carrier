module.exports = (sequelize, Sequelize) => {
    const soft_skill = sequelize.define(
      "soft_skill",
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
        tableName: "soft_skill",
      }
    );
  
    return soft_skill;
  };