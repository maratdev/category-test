import { Injectable, NotFoundException } from '@nestjs/common';
import { IdDto } from './dto/id.dto';
import { CategoryModel } from './model/category.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, SortOrder } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(CategoryModel.name)
    private readonly categoryModel: Model<CategoryModel>,
  ) {}

  async getAllCategory(
    page: number = 1,
    limit: number = 100,
    order: SortOrder = 'desc',
  ): Promise<CategoryModel[]> {
    const allData = await this.categoryModel
      .find()
      .sort({ createdAt: order })
      .skip((page - 1) * limit)
      .limit(100);

    if (!(allData || [allData].length === 0)) {
      throw new NotFoundException();
    }
    return allData;
  }

  async findByCategoryId({ id }: IdDto) {
    const findCategoryId = await this.categoryModel
      .findById(id)
      .select('title');
    if (!findCategoryId) throw new NotFoundException('Category not found');
    return findCategoryId;
  }

  async searchCategoryInProduct({ id }: IdDto) {
    return this.categoryModel
      .find(id)
      .sort({ createdAt: 'desc' })
      .populate('product')
      .exec();
  }
}
