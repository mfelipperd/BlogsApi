const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');
const loginController = require('./controller/loginController');
const { validateToken } = require('./schemas/tokenSchema');

const app = express();
app.use(bodyParser.json());

app.post('/user', userController.createUser);
app.get('/user', validateToken, userController.userList);
app.post('/login', loginController.loginUser);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
