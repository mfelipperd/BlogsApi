const { categorie } = require('../models');

const createCategorie = async (req, res) => {
    const { name } = req.body;
    console.log('#######################3', name);
    const newName = await categorie.create({ name });
    return res.status(201).json(newName);
};

/* const test = async (req, res) => {
    const { name } = req.body;
    const newName = await categorieService.newCategorie(name);
    res.status(201).json(newName);
}; */

module.exports = {
    createCategorie,
   // test,
};
