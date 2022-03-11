module.exports = (sequelize, _DataTypes) => {
    const PostCategorie = sequelize.define( 'PostCategorie',
      {},
      { timestamps: false, tableName: 'PostsCategories' },
  );
    PostCategorie.associate = (models) => {
      models.Categorie.belongsToMany(models.BlogPosts, {
        foreignKey: 'catagoriesId',
        as: 'blogPosts',
        through: PostCategorie,
        otherKey: 'postId',
      }); 
      models.BlogPosts.belongsToMany(models.Categories, {
        foreignKey: 'postId',
        as: 'categories',
        through: PostCategorie,
        otherKey: 'categoriesId',
      });
    };
    return PostCategorie;
  };
