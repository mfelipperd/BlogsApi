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

exports.validatePassword = async (password) => {
    const schema = Joi.object({
        passwordLenght: Joi.string().length(6).error(PASSWORD_LENGTH),
        passwordIsRequired: Joi.required().error(PASSWORD_IS_REQUIRED),
    });
    await schema.validateAsync({ passwordLenght: password, passwordIsRequired: password });
};
