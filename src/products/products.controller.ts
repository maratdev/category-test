import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { IdDto } from '../categories/dto/id.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':id')
  async findOne(@Param() id: IdDto) {
    return this.productsService.findByProductId(id);
  }
}
