/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/providers/prisma.service';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
})
export class ProductModule { }
