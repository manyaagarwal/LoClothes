import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [ProductModule, UsersModule, TypeOrmModule.forRoot(configService.getTypeOrmConfig()), OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
