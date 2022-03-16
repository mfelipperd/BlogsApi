module.exports = (sequelize, DataTypes) => {
    const categorie = sequelize.define(
      'categorie',
      {
        name: { type: DataTypes.STRING },
      },
      {
        timestamps: false,
        tableName: 'Categories',
      },
    );
      
    return categorie;
  };
