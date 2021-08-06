import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository : Repository<Product>
  ){}
  async create(createProductDto: CreateProductDto) {
    // return 'This action adds a new product';
    const productExists = await this.productRepository.find({name: createProductDto.name, description: createProductDto.description}); 
    if(productExists.length != 0){
      throw new HttpException('This product already exists! Try updating it.', HttpStatus.BAD_REQUEST); 
    }

    const res = await this.productRepository.save(createProductDto); 
    return res; 
  }

  findAll() {
    // return `This action returns all product`;
    return this.productRepository.find(); 
  }

  findOne(id: number) {
    // return `This action returns a #${id} product`;
    return this.productRepository.findOne(id); 
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    // return `This action removes a #${id} product`;
    return this.productRepository.delete(id); 
  }
}
