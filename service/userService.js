const { User } = require('../models');
const { validateDisplayName, validateEmail, validatePassword } = require('../schemas/userSchema');

const createUser = async (userData) => {
    const { displayName, email, password, image } = userData;
    console.log('passou');
    const nameValid = await validateDisplayName(displayName);
    const emailValid = await validateEmail(email);
    const passwordValid = await validatePassword(password);
    if (nameValid !== undefined) return nameValid;
    if (emailValid !== undefined) return emailValid;
    if (passwordValid !== undefined) return passwordValid;
    
    const user = await User.create({ displayName, email, password, image });
    return user;
};

module.exports = {
    createUser,
};