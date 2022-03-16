const { blogPost } = require('../models');

const blogPostCreate = async (data, id) => {
    const { title, categoryIds, content } = data;
    
    const newData = {
        userId: id,
        title, 
        content,
        categoryIds, 
    };
    const createNewPost = await blogPost.create(newData);
    console.log(createNewPost);
    return createNewPost;
};

module.exports = {
    blogPostCreate,
};