const { blogPost, user, categorie } = require('../models');

const blogPostCreate = async (data, id) => {
    const { title, categoryIds, content } = data;
    
    const newData = {
        userId: id,
        title, 
        content,
        categoryIds, 
    };
    const createNewPost = await blogPost.create(newData);
    return createNewPost;
};

const getAllPosts = async () => {
const posts = await blogPost.findAll({
    attributes: { exclude: ['userId'] },
    include: [
        { model: user, as: 'user', attributes: { exclude: ['password'] } },
        { model: categorie, as: 'categories', through: [] }, // li o pull request do Vitor diorio para entender isso 
    ], // pull do vitor https://github.com/tryber/sd-015-a-project-blogs-api/pull/104/files  
});
return posts;
};

module.exports = {
    blogPostCreate,
    getAllPosts,
};
