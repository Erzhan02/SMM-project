module.exports = class ApiError extends Error {
	status;
	errors;

	constructor(status, message, errors) {
		super(message);
		this.name = this.constructor.name;
		this.status = status;
		this.errors = errors;
		Error.captureStackTrace(this, this.constructor);
	}

	static UnauthorizedError() {
		return new ApiError(401, 'Пользователь не авторизован');
	}

	static BadRequest(message, errors = []) {
		return new ApiError(400, message, errors);
	}

	static Forbidden(message = 'Доступ запрещён') {
		return new ApiError(403, message);
	}

	static NotFound(message = 'Ресурс не найден') {
		return new ApiError(404, message);
	}

	static Conflict(message = 'Конфликт запроса') {
		return new ApiError(409, message);
	}
};
