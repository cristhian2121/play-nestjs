// Dto: data transfer object to recive from request
// This is util to expience of develoment but in exection time it no valida

import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty
} from 'class-validator'

// documentation
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
 */
export class UpdateProductDto {
  @IsString()
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
