module.exports = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define(
      'BlogPosts',
      {
        title: { type: DataTypes.STRING, allowNull: false }, 
        content: { type: DataTypes.STRING, allowNull: false },
        userId: { type: DataTypes.INTEGER, allowNull: false, foregeinKey: true },
        published: { type: DataTypes.DATE },
        updated: { type: DataTypes.DATE },
      },
      {
        timestamps: false,
        tableName: 'BlogPosts',
      },
    );
  
    BlogPosts.associate = (models) => {
      BlogPosts.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };
  
    return BlogPosts;
  };
