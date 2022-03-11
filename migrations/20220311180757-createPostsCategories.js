"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostCategories = await queryInterface.createTable("PostsCategories", {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "BlogPosts", key: "id" },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "Categories", key: "id" },
      },
    });
    return PostCategories;
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PostsCategories");
  },
};
