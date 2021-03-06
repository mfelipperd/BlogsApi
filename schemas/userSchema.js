const Joi = require('@hapi/joi');
const { user } = require('../models');

const LENGTH_NAME = new Error();
LENGTH_NAME.message = '"displayName" length must be at least 8 characters long';
LENGTH_NAME.code = 400;

const EMAIL_INVALID = new Error();
EMAIL_INVALID.message = '"email" must be a valid email';
EMAIL_INVALID.code = 400;

const EMAIL_IS_REQUIRED = new Error();
EMAIL_IS_REQUIRED.message = '"email" is required';
EMAIL_IS_REQUIRED.code = 400;

const PASSWORD_LENGTH = new Error();
PASSWORD_LENGTH.message = '"password" length must be 6 characters long';
PASSWORD_LENGTH.code = 400;

const PASSWORD_IS_REQUIRED = new Error();
PASSWORD_IS_REQUIRED.message = '"password" is required';
PASSWORD_IS_REQUIRED.code = 400;

const ALREADY_EXISTS = new Error();
ALREADY_EXISTS.message = 'User already registered';
ALREADY_EXISTS.code = 409;

const EMAIL_LENGTH = new Error();
EMAIL_LENGTH.message = '"email" is not allowed to be empty';
EMAIL_LENGTH.code = 400;

const PASSWORD_NOT_ALLOWED = new Error();
PASSWORD_NOT_ALLOWED.message = '"password" is not allowed to be empty';
PASSWORD_NOT_ALLOWED.code = 400;

const INVALID_FIELDS = new Error();
INVALID_FIELDS.message = 'Invalid fields';
INVALID_FIELDS.code = 400;

exports.validateDisplayName = async (displayName) => {
    const schema = Joi.object({
        lengthName: Joi.string().min(8).error(LENGTH_NAME),
    });
    await schema.validateAsync({ lengthName: displayName });
};

exports.validateEmail = async (email) => {
    const schema = Joi.object({
        emailValid: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).error(EMAIL_INVALID),
        emailIsRequired: Joi.required().error(EMAIL_IS_REQUIRED),
    });
    await schema.validateAsync({ emailValid: email, emailIsRequired: email });
        const emailExists = await user.findOne({ where: { email } });
        if (emailExists) {
        throw ALREADY_EXISTS;
    } 
};        

exports.loginValidate = async (email) => {
    const schema = Joi.object({
        emailValid: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).error(EMAIL_LENGTH),
        emailIsRequired: Joi.required().error(EMAIL_IS_REQUIRED),
       // emailLength: Joi.min(3).error(EMAIL_LENGTH),
    });
    await schema
    .validateAsync({ emailValid: email, emailIsRequired: email /* emailLength: email */ });
        const emailExists = await user.findOne({ where: { email } });
        if (!emailExists) {
        throw INVALID_FIELDS;
    } 
};

exports.loginPassword = async (password) => {
    const schema = Joi.object({
        passwordLenght: Joi.string().length(6).error(PASSWORD_NOT_ALLOWED),
        passwordIsRequired: Joi.required().error(PASSWORD_IS_REQUIRED),
    });
    await schema.validateAsync({ passwordLenght: password, passwordIsRequired: password });
};

exports.validatePassword = async (password) => {
    const schema = Joi.object({
        passwordLenght: Joi.string().length(6).error(PASSWORD_LENGTH),
        passwordIsRequired: Joi.required().error(PASSWORD_IS_REQUIRED),
    });
    await schema.validateAsync({ passwordLenght: password, passwordIsRequired: password });
};

exports.userExists = async (req, res, next) => {
    const { id } = req.params;
    try {
    const { user: info } = await user.findByPk(id);
    console.log(info);
    } catch (error) {
if (error) return res.status(404).json({ message: 'User does not exist' });
    }
    
    next();
};