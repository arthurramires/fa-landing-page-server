const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const UsersController = require('./controllers/UsersController');


const routes = express.Router();


routes.get('/users', UsersController.index);

routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
    })
}),UsersController.create);


module.exports = routes;