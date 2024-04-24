module.exports = (sequelize, Sequelize) => {
    const Recuitment = sequelize.define(
      "recuitment",
      {
          recuitment_id: {
            type: Sequelize.INTEGER,
          },
          recuitment_name: {
            type: Sequelize.STRING,
          },
        },
      {
        tableName: "recuitment",                                                                                                           
      }
    );
    return Recuitment;
  };