import { IsNotEmpty } from "class-validator";
import { User } from "../../users/entities/user.entity"; 
import { OrderItem } from "../entities/orderItem.entity";   

export class CreateOrderDto {
    @IsNotEmpty() user : User; 
}
