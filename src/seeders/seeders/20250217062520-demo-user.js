'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     ;
    */
    await queryInterface.bulkInsert('Users', 
      [
        {
          email: '1@gmail.om',
          password:'1',
          username:'1'      
        },
        {
          email: '2@gmail.om',
          password:'2',
          username:'2'      
        },
        {
          email: '3@gmail.om',
          password:'3',
          username:'3'      
        },
      ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
