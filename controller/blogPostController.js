const jwt = require('jsonwebtoken');
const blogPostService = require('../service/blogPostService');
const { user } = require('../models');

const blogPostCreate = async (req, res) => {
    const secret = 'seusecretdetoken';
    const dataInfos = req.body;
    const token = req.headers.authorization;
    const { data } = jwt.verify(token, secret);
    const { email } = data;
    const { id } = await user.findOne({ where: { email } });
    const newPost = await blogPostService.blogPostCreate(dataInfos, id);
    res.status(201).json(newPost);
};

const getAllPosts = async (req, res) => {
    const posts = await blogPostService.getAllPosts();

    return res.status(200).json(posts);
};

module.exports = {
blogPostCreate,
getAllPosts,
};