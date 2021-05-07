// Dto: data transfer object to recive from request
// This is util to expience of develoment but in exection time it no valida

/**
 * Dto to create product
 */
export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}

/**
 * Dto to update product
 */
export class UpdateProductDto {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
