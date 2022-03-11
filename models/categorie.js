module.exports = (sequelize, DataTypes) => {
    const Categorie = sequelize.define(
      'Categories',
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
      },
      {
        timestamps: false,
        tableName: 'Categories',
      },
    );
   /* Categories.associate = (models) => {
      Categories.belongsTo(models.PostCategories, {
        foreignKey: 'categoryId',
        as: 'categorie',
      });
    }; */
    return Categorie;
  };
