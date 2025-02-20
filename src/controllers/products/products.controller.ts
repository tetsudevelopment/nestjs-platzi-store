import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  // ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import {
  CreateProductDto,
  UpdateProductDto,
} from '../../dtos/products/products.dtos';
interface Params {
  id: number;
}

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getProducts() {
    // return 'Todos los productos';
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductsFilter(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Products limit => ${limit} and Products offset => ${offset}, Brand => ${brand}`,
    };
  }

  @Get(':id')
  getProductsId2(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }
  @Get(':id')
  getProductsId(@Param() params: Params) {
    return this.productsService.findOne(params.id);
  }
  @Post()
  createProduct(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }
  @Put(':id')
  updatedProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return {
      message: `Producto ${id} Eliminado`,
    };
  }
}
