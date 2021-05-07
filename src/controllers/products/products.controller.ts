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
import { ParseIntPipe } from 'src/common';
import { CreateProductDto } from 'src/dtos';
import { UpdateProductDto } from 'src/dtos/products.dto';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {

  constructor(
    private productsService: ProductsService
  ) {
  }

  @Get()
  getPaginator(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.getAll()
  }

  @Get(':productId')
  // @HttpCode(HttpStatus.AMBIGUOUS)
  getById(
    @Param('productId', ParseIntPipe) productId: number
  ) {
    return this.productsService.getByFilter(+productId)
  }

  @Post()
  create(@Body() product: CreateProductDto) {
    return this.productsService.create(product)
  }

  @Put(':id')
  edit(
    @Param('id') id: string,
    @Body() product: UpdateProductDto
  ) {
    return 'edited'
  }

  @Delete(':id')
  delete(
    @Param('id') id: string
  ) {
    return 'deleted'
  }



}
