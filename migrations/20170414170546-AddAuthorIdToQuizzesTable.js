
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return  queryInterface.addColumn( 'Posts', 
                                        'AuthorId', 
                                        { type: Sequelize.INTEGER }
                                      );
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('Posts','AuthorId');
  }
};