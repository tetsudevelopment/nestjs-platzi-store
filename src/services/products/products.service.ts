import { Injectable, NotFoundException } from '@nestjs/common';

import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/dtos/products/products.dtos';

@Injectable()
export class ProductsService {
  private counter = 1;
  private products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 12,
      stock: 2,
      image: '',
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    return product;
  }
  create(payload: CreateProductDto) {
    this.counter++;
    const id = { id: this.counter };
    const newProduct = {
      ...id,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    if (product) this.products[index] = { ...product, ...payload };
    return this.products[index];
  }
  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    return this.products[index];
  }
}
