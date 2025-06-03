// registration-validation.js
const { body } = require('express-validator');

module.exports.registrationValidation = [
	body('email')
		.trim()
		.notEmpty()
		.withMessage('Email обязателен')
		.isEmail()
		.withMessage('Некорректный email'),

	body('password')
		.trim()
		.notEmpty()
		.withMessage('Пароль обязателен')
		.isLength({ min: 3, max: 32 })
		.withMessage('Пароль должен быть от 3 до 32 символов'),
];
