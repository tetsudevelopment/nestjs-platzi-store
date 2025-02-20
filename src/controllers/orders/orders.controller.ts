import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders() {
    return {
      message: 'Traer todas las ordenes',
    };
  }
  @Get(':id')
  getOrder(@Param('id') id: number) {
    return {
      message: `Esta es la Orden con id ${id}`,
    };
  }
  @Post()
  postOrder(@Body() payload: object) {
    return {
      message: 'Orden Creada Exitosamente',
      payload,
    };
  }
  @Put(':id')
  putOrder(@Param('id') id: number, @Body() payload: object) {
    return {
      message: `Orden con id ${id} Actualizado exitosamente`,
      payload,
    };
  }
  @Delete(':id')
  deleteOrder(@Param('id') id: number) {
    return {
      message: `Orden con id ${id} eliminada exitosamente`,
    };
  }
}
