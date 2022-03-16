const { categorie } = require('../models');

const createCategorie = async (req, res) => {
    const { name } = req.body;
    const newName = await categorie.create({ name });
    return res.status(201).json(newName);
};

const getAllCategories = async (req, res) => {
const list = await categorie.findAll();
return res.status(200).json(list);
};

module.exports = {
    createCategorie,
    getAllCategories,
};
