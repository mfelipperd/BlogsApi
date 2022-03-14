const { tokenCreate } = require('../schemas/tokenSchema');
const loginService = require('../service/loginService');

const loginUser = async (req, res) => {
const dataUser = req.body;
try {
    const validLogin = await loginService.loginUser(dataUser);
    const token = tokenCreate(validLogin);
    return res.status(200).json({ token });
} catch (error) {
return res.status(error.code).json({ message: error.message });
}
};

module.exports = {
loginUser,
};