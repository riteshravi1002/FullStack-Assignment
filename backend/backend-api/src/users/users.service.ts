import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';  // Make sure this is imported
import { UpdateUserDto } from './dto/update-user.dto';  // Import UpdateUserDto

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new user
  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        username: createUserDto.username,
        phone: createUserDto.phone,
        profile: {
          create: createUserDto.profile,
        },
      },
    });
  }

  // Get all users
  async findAll() {
    return this.prisma.user.findMany({
      include: { profile: true },
    });
  }

  // Get a single user by ID
  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { profile: true },
    });
  }

  // Update a user by ID
  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        username: updateUserDto.username,
        phone: updateUserDto.phone,
        profile: {
          update: updateUserDto.profile,
        },
      },
    });
  }

  // Remove a user by ID
  async remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
