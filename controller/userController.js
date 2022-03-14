const { tokenCreate } = require('../schemas/tokenSchema');
const userService = require('../service/userService');

const createUser = async (req, res) => {
const dataUser = req.body;

  try {
  const user = await userService.createUser(dataUser);
    const token = tokenCreate(user);
    return res.status(201).json({ token });
} catch (error) {
return res.status(error.code).json({ message: error.message });
}
};

const userList = async (req, res) => {
    const listOfUser = await userService.listUser();
    res.status(200).json(listOfUser);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const infos = await userService.getUserById(id);
  res.status(200).json(infos);
};

module.exports = {
createUser,
userList,
getUserById,
};