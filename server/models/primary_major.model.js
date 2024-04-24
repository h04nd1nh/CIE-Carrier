module.exports = (sequelize, Sequelize) => {
    const primaryMajor = sequelize.define(
      "primary_major",
      {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          primary_title: {
            type: Sequelize.STRING,
          },
          sub_title_1: {
            type: Sequelize.STRING,
          },
          sub_title_2: {
            type: Sequelize.STRING,
          },
          image: {
            type: Sequelize.STRING,
          },
        },
      {
        tableName: "primary_major",
      }
    );
  
    return primaryMajor;
  };