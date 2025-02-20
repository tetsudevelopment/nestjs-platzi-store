import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  @HttpCode(HttpStatus.OK)
  getUsers() {
    return {
      message: 'Usuarios traídos exitosamente',
    };
  }
  @Get('id')
  getUser(@Param('id') id: number) {
    return {
      message: `Usuario con id ${id} traído exitosamente`,
    };
  }
  @Post()
  postOrder(@Body() payload: object) {
    return {
      message: 'Usuario Creado Exitosamente',
      payload,
    };
  }
  @Put(':id')
  putOrder(@Param('id') id: number, @Body() payload: object) {
    return {
      message: `Usuario con id ${id} Actualizado exitosamente`,
      payload,
    };
  }
  @Delete(':id')
  deleteOrder(@Param('id') id: number) {
    return {
      message: `Usuario con id ${id} eliminado exitosamente`,
    };
  }
}
