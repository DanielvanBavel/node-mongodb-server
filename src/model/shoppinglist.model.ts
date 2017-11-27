import { Document, Model, model, Schema } from 'mongoose';
import { IShoppinglistDocument, ShoppinglistSchema } from './schemas/Shoppinglist.schema';

export interface IShoppinglistModel extends Model<IShoppinglistDocument> { }

export const Shoppinglist: IShoppinglistModel = model<IShoppinglistDocument, IShoppinglistModel>('Shoppinglist', ShoppinglistSchema);

export default Shoppinglist;