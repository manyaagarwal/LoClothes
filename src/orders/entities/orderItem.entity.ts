import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity"
import { Product } from "../../product/entities/product.entity"; 

@Entity() 
export class OrderItem {

    @PrimaryGeneratedColumn()
    id: number; 

    @ManyToOne (type => Product, {onDelete: 'CASCADE'}) @JoinColumn()
    product: Product;

    @ManyToOne (type => Order, {onDelete: 'CASCADE'}) @JoinColumn() 
    order: Order; 

    @Column() 
    qty: number;
}