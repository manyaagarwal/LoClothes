import { IsNotEmpty } from "class-validator";
import { Product } from "src/product/entities/product.entity";
import { Order } from "../entities/order.entity";

export class CreateOrderItemDto {
    @IsNotEmpty() product: Product; 
    @IsNotEmpty() qty: number;
    order: Order;
}