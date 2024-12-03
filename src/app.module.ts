import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigAppModule } from './config/core/config-app';
import { MongooseConfigService } from './config/mongo.config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigAppModule,
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    CategoriesModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
