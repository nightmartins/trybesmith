import Joi from 'joi';

export const userSchema = Joi.object({
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

// const loginSchema = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().length(6).required(),
// });

// const categorySchema = Joi.object({
//   name: Joi.string().required(),
// });

// const blogPostSchema = Joi.object({
//   title: Joi.string().required(),
//   categoryIds: Joi.array().required(),
//   content: Joi.string().required(),
// });

// const editPostSchema = Joi.object({
//   title: Joi.string().required(),
//   categoryIds: Joi.array(),
//   content: Joi.string().required(),
// });

export default userSchema;

/*
Referência para correção da importação do Joi:
https://stackoverflow.com/questions/43112619/typescript-require-statement-not-part-of-an-import-statement
*/