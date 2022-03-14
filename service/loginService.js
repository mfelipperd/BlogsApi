const { loginValidate, loginPassword } = require('../schemas/userSchema');

const loginUser = async (loginData) => {
    const { email, password } = loginData;
    const validPassword = await loginPassword(password);
    const validEmail = await loginValidate(email);
    console.log(email, password);

    if (validEmail) return validEmail;
    if (validPassword) return validPassword;
    return { email, password };
};

module.exports = {
    loginUser,
};