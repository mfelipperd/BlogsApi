module.exports = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define(
      'blogPost',
      { // userId: { type: DataTypes.UUID, foreignKey: true },
        title: { type: DataTypes.STRING, allowNull: false }, 
        content: { type: DataTypes.STRING, allowNull: false },
        published: { type: DataTypes.DATE },
        updated: { type: DataTypes.DATE },
      },
      {
        timestamps: false,
        tableName: 'BlogPosts',
      },
    );
  
    BlogPosts.associate = (models) => {
      BlogPosts.belongsTo(models.user, { foreignKey: 'userId', as: 'author' });
      // BlogPosts.hasMany(models.postCategorie, { foreignKey: 'postId', as: 'category' });
    };
  
    return BlogPosts;
  };
