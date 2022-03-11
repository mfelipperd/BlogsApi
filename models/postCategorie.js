module.exports = (sequelize, _DataTypes) => {
    const PostCategorie = sequelize.define('postCategorie',
      {}, { timestamps: false, tableName: 'PostsCategories' });
    PostCategorie.associate = (models) => {
      models.categorie.belongsToMany(models.blogPost, {
        foreignKey: 'catagoriesId',
        as: 'blogPosts',
        through: PostCategorie,
        otherKey: 'postId',
      }); 
      models.blogPost.belongsToMany(models.categorie, {
        foreignKey: 'postId',
        as: 'categories',
        through: PostCategorie,
        otherKey: 'categoriesId',
      });
    };
    return PostCategorie;
  };
