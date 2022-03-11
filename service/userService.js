const { user } = require('../models');
const { validateDisplayName, validateEmail, validatePassword } = require('../schemas/userSchema');

const createUser = async (userData) => {
    const { displayName, email, password, image } = userData;
    const nameValid = await validateDisplayName(displayName);
    const emailValid = await validateEmail(email);
    const passwordValid = await validatePassword(password);
    if (nameValid !== undefined) return nameValid;
    if (emailValid !== undefined) return emailValid;
    if (passwordValid !== undefined) return passwordValid;
    
    const userCreate = await user.create({ displayName, email, password, image });
    return userCreate;
};

module.exports = {
    createUser,
};