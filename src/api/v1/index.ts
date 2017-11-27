import express = require('express');
import recipeRoutes from './recipe.routes';
import userRoutes from './user.routes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);

export default router;
