import express = require('express');

import { User } from '../../model/user.model';

import { Recipe } from '../../model/recipe.model';

const routes = express.Router();

routes.get('/', (req, res, next) => {
    User.find({})
        .then((users) => {
            res.status(200).json(users);
        })
        .catch(next);
});

routes.get('/recipes', (req, res, next) => {
    Recipe.find({})
        .then((recipes) => {
            res.status(200).json(recipes);
        })
        .catch(next);
});

routes.get('/recipes/:id', (req, res, next) => {
    Recipe.find({id: req.query.id})
        .then((recipe) => {
            res.status(200).json(recipe);
        })
        .catch(next);
});

routes.post('/recipes', (req, res, next) => {
    Recipe.create(req.body)
        .then(() => {
            res.status(201);
        })
        .catch(next);
});

routes.put('/recipes', (req, res, next) => {
    Recipe.update({id: req.body.query.id}, req.body)
        .then((recipe) => {
            res.status(202).json(recipe);
        })
        .catch(next);
});

routes.delete('/recipes:id', (req, res, next) => {
    Recipe.remove(req.query.id)
        .then(() => {
            res.status(204);
        })
        .catch(next);
});

export default routes;
