module.exports = (sequelize, Sequelize) => {
    const majorRecuitment = sequelize.define(
      "major_recuitment",
      {
          sub_id: {
            type: Sequelize.INTEGER,
          },
          // recuitment_id: {
          //   type: Sequelize.INTERGER,
          // },
        },
      {
        tableName: "major_recuitment",                                                                                                           
      }
    );
    return majorRecuitment;
  };