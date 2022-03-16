const titleMessage = '"title" is required';
const categoryIdsMessage = '"categoryIds" is required';
const contentMessage = '"content" is required';
const notFoundCategorieId = '"categoryIds" not found';
const { categorie } = require('../models');

exports.validatePost = async (req, res, next) => {
    const { title, content } = req.body;
    if (!title) return res.status(400).json({ message: titleMessage });
    if (!content) return res.status(400).json({ message: contentMessage });
    next();
};

exports.categorieExists = async (req, res, next) => {
    const { categoryIds } = req.body;
    if (!categoryIds) return res.status(400).json({ message: categoryIdsMessage });
    if (categoryIds.length === 0) return res.status(400).json({ message: categoryIdsMessage });
    const categoriesAll = await categorie.findAll();
    const categories = JSON.stringify(categoriesAll, null, 2);
    const [findCategorie] = categoryIds.map((n) => categories.includes(n));
    if (!findCategorie) return res.status(400).json({ message: notFoundCategorieId });
    next();
};
