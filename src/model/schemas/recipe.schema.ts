import { Document, Schema } from 'mongoose';
import { IIngredientDocument, IngredientSchema } from './ingredient.schema';

export interface IRecipeDocument extends Document {
    name: string;
    time: string;
    ingredients: [IIngredientDocument];
}

export const RecipeSchema: Schema = new Schema({
    name: String,
    time: String,
    ingredients: [IngredientSchema]
});
