import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().required().min(3).messages({
    'any.required': 'Username is required',
    'string.min': 'Username must be longer than 2 characters',
    'string.base': 'Username must be a string',
  }),
  classe: Joi.string().required().min(3).messages({
    'string.min': 'Classe must be longer than 2 characters',
    'string.base': 'Classe must be a string',
    'any.required': 'Classe is required',
  }),
  level: Joi.number().strict().required().greater(0)
    .messages({
      'any.required': 'Level is required',
      'number.greater': 'Level must be greater than 0',
      'number.base': 'Level must be a number',
    }),
  password: Joi.string().required().min(8).messages({
    'string.min': 'Password must be longer than 7 characters',
    'string.base': 'Password must be a string',
    'any.required': 'Password is required',
  }),
});

const loginSchema = Joi.object({
  username: Joi.required().messages({
    'any.required': 'Username is required',
  }),
  password: Joi.required().messages({
    'any.required': 'Password is required',
  }),
});

export {
  userSchema,
  loginSchema,
};

/*
Referência para correção da importação do Joi:
https://stackoverflow.com/questions/43112619/typescript-require-statement-not-part-of-an-import-statement
*/