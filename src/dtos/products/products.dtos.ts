/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString({ message: 'El campo nombre debe ser un texto' })
  @IsNotEmpty({ message: 'El campo nombre no puede estar vacío' })
  readonly name: string;

  @IsString({ message: 'El campo descripción debe ser un texto' })
  @IsNotEmpty({ message: 'El campo descripción es obligatorio' })
  readonly description: string;

  @IsNumber({}, { message: 'El campo precio debe ser un número' })
  @IsNotEmpty({ message: 'El campo precio es obligatorio' })
  @IsPositive({ message: 'el precio debe ser positivo ' })
  readonly price: number;

  @IsNumber({}, { message: 'El campo stock debe ser un número' })
  @IsNotEmpty({ message: 'El campo stock es obligatorio' })
  @IsPositive({ message: 'el stock debe ser positivo ' })
  readonly stock: number;

  @IsUrl({}, { message: 'El campo imagen debe ser una URL válida' })
  @IsNotEmpty({ message: 'El campo imagen es obligatorio' })
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
