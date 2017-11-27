import express = require('express');
import { Shoppinglist } from '../../model/shoppinglist.model';

const routes = express.Router();

routes.get('/', (req, res, next) => {
    Shoppinglist.find({})
        .then((shoppinglist) => {
            res.status(200).json(Shoppinglist);
        })
        .catch(next);
});

routes.get('/:id', (req, res, next) => {
    const ShoppinglistId = req.params.id;

    Shoppinglist.findOne({ _id: ShoppinglistId })
        .then((Shoppinglist) => {
            res.status(200).json(Shoppinglist);
        })
        .catch(next);
});

routes.post('/', (req, res, next) => {
    const ShoppinglistProps = req.body;

    Shoppinglist.create(ShoppinglistProps)
        .then((Shoppinglist) => {
            res.status(201).json(Shoppinglist);
        })
        .catch(next);
});

routes.put('/:id', (req, res, next) => {
    const ShoppinglistId = req.params.id;
    const ShoppinglistProps = req.body;

    Shoppinglist.findByIdAndUpdate({
        _id: ShoppinglistId
    }, ShoppinglistProps)
        .then(() => Shoppinglist.findById({ _id: ShoppinglistId }))
        .then((Shoppinglist) => res.status(202).json(Shoppinglist))
        .catch(next);
});

routes.delete('/:id', (req, res, next) => {
    const ShoppinglistId = req.params.id;

    Shoppinglist.remove({ _id: ShoppinglistId })
        .then(() => {
            res.status(204).send();
        })
        .catch(next);
});

export default routes;