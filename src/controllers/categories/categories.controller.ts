import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories() {
    return 'Get categories - Traer todas las categorias';
  }
  @Get('filter')
  getFilterCategories(@Query('limit') limit: number = 100) {
    return {
      message: `Filtros limite => ${limit}`,
    };
  }
  @Get(':id')
  getCategory(@Param('id') id: number) {
    return {
      message: `Marca con id => ${id}`,
    };
  }
  @Get(':id/products/:productId')
  getCategoryProducts(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return {
      message: `product ${productId} id ${id}`,
    };
  }
  @Post()
  postCategories(@Body() payload: object) {
    return {
      message: `Categoría creada`,
      payload,
    };
  }
  @Put(':id')
  putCategories(@Param('id') id: number, @Body() payload: object) {
    return {
      id,
      message: `Categoría con id ${id} actualizado`,
      payload,
    };
  }
  @Delete(':id')
  deleteCategories(@Param('id') id: number) {
    return {
      id,
      message: `Categoría con id ${id} Eliminada`,
    };
  }
}
