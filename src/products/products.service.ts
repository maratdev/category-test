import { Injectable, NotFoundException } from '@nestjs/common';
import { IdDto } from '../categories/dto/id.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsModel } from './model/products.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(ProductsModel.name)
    private readonly productsModel: Model<ProductsModel>,
  ) {}

  async findByProductId({ id }: IdDto) {
    const findCategoryId = await this.productsModel
      .findById(id)
      .select('weight length');
    if (!findCategoryId) throw new NotFoundException('Product not found');
    return findCategoryId;
  }
}
