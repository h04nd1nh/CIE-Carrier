module.exports = (sequelize, Sequelize) => {
    const Experience = sequelize.define(
      "experience",
      {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          user_id: {
            type: Sequelize.INTEGER,
          },
          degree: {
            type: Sequelize.STRING,
          },
          major: {
            type: Sequelize.STRING,
          },
          company: {
            type: Sequelize.STRING,
          },
          description: {
            type: Sequelize.STRING,
          },
          start_date: {
            type: Sequelize.DATE,
          },
          end_date: {
            type: Sequelize.DATE,
          },
        },
      {
        tableName: "experience",
      }
    );
  
    return Experience;
  };