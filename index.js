const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');
const loginController = require('./controller/loginController');
const categorieController = require('./controller/categorieController');
const { validateToken } = require('./schemas/tokenSchema');
const { userExists } = require('./schemas/userSchema');
const { validateCategorieName } = require('./schemas/categorieSchema');

const app = express();
app.use(bodyParser.json());

app.post('/user', userController.createUser);
app.get('/user', validateToken, userController.userList);
app.get('/user/:id', validateToken, userExists, userController.getUserById);
app.post('/login', loginController.loginUser);
app.post('/categories', validateCategorieName, validateToken, categorieController.createCategorie);
app.get('/categories', validateToken, categorieController.getAllCategories);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
