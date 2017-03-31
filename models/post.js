
// Definicion del modelo Quiz:

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Post',
                          { question: DataTypes.STRING,
                            answer:   DataTypes.STRING
                          });
};