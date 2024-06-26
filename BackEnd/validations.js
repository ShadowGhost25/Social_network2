import { body } from "express-validator";
export const loginValidator = [
  body('email', "Неверный email").isEmail(),
  body('password', "Пароль составляет меньше 5 символов").isLength({ min: 5 }),
]

export const userStatusValidatior = [
  body('fullName', 'Имя пользователя составляет менее 2 символом').isLength({ min: 2 }),
  body('surName', 'Фамилия пользователя составляет менее 2 символов').isLength({ min: 2 }),
  body('email', "Неверный email").isEmail(),
  body('phone', "Телефон составляет меньше 10 символов").isLength({ min: 11 }),
  body('status', 'Статус менее двух символом').optional(),
]

export const registerValidator = [
  body('fullName', 'Имя пользователя составляет менее 2 символом').isLength({ min: 2 }),
  body('surName', 'Фамилия пользователя составляет менее 2 символов').isLength({ min: 2 }),
  body('email', "Неверный email").isEmail(),
  body('phone', "Телефон составляет менее 11 символов").isLength({ min: 11 }),
  body('password', "Пароль составляет меньше 5 символов").isLength({ min: 5 }),
  body('avatarURL', "Указан не верный URL адресс").optional().isURL(),
]

export const postCreateValidator = [
  body('title', "Введите название статьи").isLength({ min: 1 }),
  body('text', "Введите текст статьи").isLength({ min: 1 }).isString(),
  body('tags', 'Тэг составляет менее 1 символа').isLength({ min: 1 }).isString(),
  body('imageURL', "Неверная ссылка на изображение").optional().isURL(),
]

export const groupCreateValidator = [
  body('title', "Введите заголовок группы").isLength({ min: 1 }),
  body('text', "Введите текст группы").isLength({ min: 1 }).isString(),
  body('imageURL', 'Неверная ссылка на изображение').optional().isString(),
]