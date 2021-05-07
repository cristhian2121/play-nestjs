import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from 'src/dtos';
import { Product } from 'src/entities';

@Injectable()
export class ProductsService {

  private counterId = 1

  private products: Product[] = [
    {
      id: 1,
      name: 'Pedialyte',
      description: 'care your helth',
      price: 6000,
      image: '',
      stock: 121
    }
  ]

  getAll() {
    return this.products
  }

  getByFilter(id: number) {
    const product = this.products.find(item => item.id === id)
    if (!product) throw new NotFoundException('Product no exist')
    return product
  }

  create(payload: CreateProductDto): Product {
    const product = {
      id: this.counterId + 1,
      ...payload
    }
    this.products.push(product)
    return product
  }

}
