module.exports = (sequelize, Sequelize) => {
    const Prize = sequelize.define(
      "prize",
      {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          user_id: {
            type: Sequelize.STRING,
            unique: true
          },
          prize_name: {
            type: Sequelize.STRING,
          },
          prize_organization: {
            type: Sequelize.STRING,
          },
          prize_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
          },
        },
      {
        tableName: "prize",
      }
    );
  
    return Prize;
  };