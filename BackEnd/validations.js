import { body } from "express-validator"

export const loginValidator = [
  body('email', "Неверный email").isEmail(),
  body('password', "Пароль составляет меньше 5 символов").isLength({ min: 5 }),
]

export const userStatusValidatior = [
  body('status', 'Неверный статусы').isLength({min: 2}),
]

export const registerValidator = [
  body('fullName', 'Имя пользователя составляет менее 2 символом').isLength({ min: 2 }),
  body('surName', '"Фамилия пользователя составляет менее 2 символов').isLength({ min: 2}),
  body('email', "Неверный email").isEmail(),
  body('phone', "Телефон составляет меньше 10 символов").isLength({ min: 10 }),
  body('password', "Пароль составляет меньше 5 символов").isLength({ min: 5 }),
  body('fullName', 'Имя пользователя составляет менее 3 символом').isLength({ min: 3 }),
  body('avatarURL', "Указан не верный URL адресс").optional().isURL(),
]

export const postCreateValidator = [
  body('title', "Введите заголовок статьи").isLength({ min: 2 }),
  body('text', "Введите текст статьи").isLength({ min: 3 }).isString(),
  body('tags', 'Имя пользователя составляет менее 3 символом').optional().isString(),
  body('imageURL', "Неверная ссылка на изображение").optional().isURL(),
]
export const groupCreateValidator = [
  body('title', "Введите заголовок статьи").isLength({ min: 2 }),
  body('text', "Введите текст статьи").isLength({ min: 3 }).isString(),
  body('tags', 'Имя пользователя составляет менее 3 символом').optional().isString(),
  body('imageURL', "Неверная ссылка на изображение").optional().isURL(),
]