import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity"; 

@Entity()
export class Order {

    @PrimaryGeneratedColumn() 
    id: number; 

    @ManyToOne (type => User, {onDelete: 'CASCADE'}) @JoinColumn() 
    user: User;

    // @OneToMany (type => OrderItem) @JoinColumn()
    // orderItems : OrderItem[]; 
}
