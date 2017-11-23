import { Document, Schema } from 'mongoose';
import { IRecipeDocument, RecipeSchema } from './recipe.schema';

export interface IUserDocument extends Document {
    name: string;
    title: string;
    recipes: Schema.Types.ObjectId[] | IRecipeDocument[];
}

export const UserSchema: Schema = new Schema({
    name: String,
    title: String,
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'recipes'
    }]
});
