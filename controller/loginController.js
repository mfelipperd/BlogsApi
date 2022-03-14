const jwt = require('jsonwebtoken');
const loginService = require('../service/loginService');

const secret = 'seusecretdetoken';

const loginUser = async (req, res) => {
const dataUser = req.body;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};
try {
    const validLogin = await loginService.loginUser(dataUser);
    console.log(validLogin);
    const token = jwt.sign({ data: validLogin }, secret, jwtConfig);
    return res.status(200).json({ token });
} catch (error) {
console.log('**********************', error);
return res.status(error.code).json({ message: error.message });
}
};

module.exports = {
loginUser,
};