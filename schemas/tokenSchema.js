const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

const noMessage = 'Token not found';

const iMessage = 'Expired or invalid token';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const tokenCreate = (infos) => {
    const token = jwt.sign({ data: infos }, secret, jwtConfig);
    return token;
}; 

const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: noMessage });

    try {
    jwt.verify(token, secret);
    } catch (error) {
    if (error) return res.status(401).json({ message: iMessage });
    }
    
next();
};

module.exports = {
    validateToken,
    tokenCreate,
};