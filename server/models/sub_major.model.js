module.exports = (sequelize, Sequelize) => {
    const primaryMajor = sequelize.define(
      "primary_major",
      {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          primary_id: {
            type: Sequelize.STRING,
          },
          title: {
            type: Sequelize.STRING,
          },
          describle: {
            type: Sequelize.STRING,
          },
          range_salary: {
            type: Sequelize.STRING,
          },
          require: {
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