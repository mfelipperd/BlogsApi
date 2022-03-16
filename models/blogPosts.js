module.exports = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define(
      'blogPost',
      {
        title: { type: DataTypes.STRING }, 
        content: { type: DataTypes.STRING },
        published: { type: DataTypes.DATE },
        updated: { type: DataTypes.DATE },
        userId: { type: DataTypes.INTEGER },
      },
      {
        timestamps: false, tableName: 'BlogPosts',
      },
    );
    BlogPosts.associate = (models) => {
      BlogPosts.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
    };

    return BlogPosts;
  };
