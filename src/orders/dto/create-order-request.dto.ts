import { IsNotEmpty } from "class-validator";
import { CreateOrderItemDto } from "./create-order-item.dto";
import { CreateOrderDto } from "./create-order.dto";

export class CreateOrderRequestDto {
    @IsNotEmpty() order: CreateOrderDto; 
    @IsNotEmpty() orderItems: CreateOrderItemDto[]; 
}