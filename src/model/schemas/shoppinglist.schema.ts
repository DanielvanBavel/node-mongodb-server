import { Document, Schema } from 'mongoose';

export interface IShoppinglistDocument extends Document {
    name: string;
    number: string;
}

export const ShoppinglistSchema: Schema = new Schema({
    name: String,
    number: String
});
