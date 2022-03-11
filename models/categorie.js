module.exports = (sequelize, DataTypes) => {
    const categorie = sequelize.define(
      'categorie',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
      },
      {
        timestamps: false,
        tableName: 'Categories',
      },
    );
    /* categorie.associate = (models) => {
      categorie.hasMany(models.postCategorie, {
        foreignKey: 'categoryId',
        as: 'posts',
      });
    }; */
    return categorie;
  };
