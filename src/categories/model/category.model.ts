import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'category',
  timestamps: true,
})
export class CategoryModel extends Document {
  @Prop({
    required: true,
  })
  title: string;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryModel);
