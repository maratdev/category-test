import { Controller, Get, Param, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { IdDto } from './dto/id.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll(@Query() { order, page, limit }) {
    return this.categoriesService.getAllCategory(+page, +limit, order);
  }

  @Get(':id')
  async findOne(@Param() id: IdDto) {
    return this.categoriesService.findByCategoryId(id);
  }

  @Get(':id/products')
  async findCategoryProducts(@Param() id: IdDto) {
    return this.categoriesService.searchCategoryInProduct(id);
  }
}
