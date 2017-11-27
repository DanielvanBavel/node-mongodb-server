import { Document, Schema } from 'mongoose';

export interface IShoppinglistDocument extends Document {
    name: string;
    amount: number;
}

export const ShoppinglistSchema: Schema = new Schema({
    name: String,
    amount: Number
});
