'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Posts', [ 
         { question: 'Capital de Italia', answer: 'Roma',
           createdAt: new Date(), updatedAt: new Date() },
         { question: 'Capital de Portugal', answer: 'Lisboa',
           createdAt: new Date(), updatedAt: new Date() },
         { question: 'Capital de España', answer: 'Madrid',
           createdAt: new Date(), updatedAt: new Date() },
         { question: 'Como me llamo', answer: 'Asier',
           createdAt: new Date(), updatedAt: new Date() },
          { question: 'hola', answer: 'hola',
           createdAt: new Date(), updatedAt: new Date() },
        ]);

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Posts', null, {});
  }
};