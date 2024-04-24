module.exports = (sequelize, Sequelize) => {
    const Academic = sequelize.define(
      "academic",
      {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          user_id: {
            type: Sequelize.INTEGER,
          },
          school: {
            type: Sequelize.STRING,
          },
          major: {
            type: Sequelize.STRING,
          },
          degree: {
            type: Sequelize.STRING,
          },
          major_subject_1: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          major_subject_2: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          major_subject_3: {
            type: Sequelize.STRING,
            allowNull: true,
          },
        },
      {
        tableName: "academic",
      }
    );
  
    return Academic;
  };