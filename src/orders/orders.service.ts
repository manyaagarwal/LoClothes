import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderRequestDto } from './dto/create-order-request.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/orderItem.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(OrderItem) private orderItemRepository: Repository<OrderItem>
  ) {}

  async create(createOrderRequestDto: CreateOrderRequestDto) {
    // return 'This action adds a new order';
    const { order, orderItems } = createOrderRequestDto;
    const orderRes = await this.orderRepository.save(order);
    orderItems.forEach(orderItem => orderItem['order'] = orderRes); 
    console.log(orderItems);
    let total = 0; 
    orderItems.forEach(item => this.orderItemRepository.save(item));
    orderItems.forEach(item => total += item.product.price * item.qty);
    return "Total cost is " + total + " units."; 
  }

  findAll() {
    // return `This action returns all orders`;
    return this.orderRepository.find();
  }

  findOne(id: number) {
    // return `This action returns a #${id} order`;
    return this.orderRepository.findOne(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    // return `This action removes a #${id} order`;
    return this.orderRepository.delete(id); 
  }
}
