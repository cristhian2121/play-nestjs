// Dto: data transfer object to recive from request
// This is util to expience of develoment but in exection time it no valida

import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive
} from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

// documentation
// https://github.com/typestack/class-validator
// https://trilon.io/blog/introducing-mapped-types-for-nestjs

/**
 * Dto to create product
 */
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

/**
 * Dto to update product
 * I use partiialType to re used code th easy form
 */
export class UpdateProductDto extends PartialType(CreateProductDto) {
}
