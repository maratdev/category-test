import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CategoryModel } from '../../categories/model/category.model';

@Schema({
  collection: 'products',
  timestamps: true,
})
export class ProductsModel extends Document {
  @Prop({
    required: true,
  })
  weight: string;

  @Prop({
    required: true,
  })
  length: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'CategorySchema',
    required: true,
  })
  category: CategoryModel[];
}

export const ProductsSchema = SchemaFactory.createForClass(ProductsModel);
