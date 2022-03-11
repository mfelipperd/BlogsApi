const jwt = require('jsonwebtoken');
const userService = require('../service/userService');

const secret = 'seusecretdetoken';

const createUser = async (req, res) => {
const dataUser = req.body;
console.log(dataUser);
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  try {
    console.log('entrou no try');
  const user = await userService.createUser(dataUser);
      const token = jwt.sign({ data: user }, secret, jwtConfig);
    return res.status(200).json({ token });
} catch (error) {
    console.log(error);
return res.status(error.code).json({ message: error.message });
}
};

module.exports = {
createUser,
};