
// Definicion del modelo Post:

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Post',
                          { question: { type: DataTypes.STRING,
                          	            validate: { notEmpty: {msg: "Falta Pregunta"}}
                          	          },
                            answer:   { type: DataTypes.STRING,
                                        validate: { notEmpty: {msg: "Falta Respuesta"}}
                                      }
                          });
};