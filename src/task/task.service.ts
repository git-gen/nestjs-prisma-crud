import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { PrismaService } from './../prisma.service';
import { task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  create(data: TaskDto) {
    this.prisma.task.create({ data });
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, data: TaskDto) {
    return `#${id}`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
