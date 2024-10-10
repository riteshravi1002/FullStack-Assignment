import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';  // Import PrismaModule

@Module({
  imports: [PrismaModule],  // Import PrismaModule to make PrismaService available
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
