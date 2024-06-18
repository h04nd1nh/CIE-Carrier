module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      "user",
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
          },
          updated_at: {
            type: Sequelize.DATE,
          },
        },
      {
        tableName: "user",
      }
    );
    return User;
  };