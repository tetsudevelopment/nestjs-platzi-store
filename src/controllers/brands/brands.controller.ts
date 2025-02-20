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

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands() {
    return 'Get Brands - Traer todas las marcas';
  }

  @Get(':id')
  getBrand(@Param('id') id: number) {
    return `Marca con id => ${id}`;
  }
  @Get('filter')
  getFilterBrand(@Query('limit') limit: number = 100) {
    return `Filtros limite => ${limit}`;
  }
  @Post()
  postBrand(@Body() payload: object) {
    return {
      message: 'Marca Creada',
      payload,
    };
  }
  @Put(':id')
  putBrand(@Param('id') id: number, @Body() payload: object) {
    return {
      id,
      message: `Marca con id ${id} actualizado correctamente`,
      payload,
    };
  }
  @Delete(':id')
  deleteBrand(@Param('id') id: number) {
    return {
      message: `Marca Con el ${id} eliminada Correctamente`,
      id,
    };
  }
}
