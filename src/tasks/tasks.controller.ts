import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/edit.task.dto';
import IdMongoDbParams from 'src/utils/validation/idMongoDbParams';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getTaskById(@Param() { id }: IdMongoDbParams) {
    return this.tasksService.getTaskById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('')
  async createTask(@Body() task: CreateTaskDto) {
    console.log('Task created', task);
    return this.tasksService.createTask(task);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateTask(
    @Param() { id }: IdMongoDbParams,
    @Body() task: UpdateTaskDto,
  ) {
    return this.tasksService.updateTask(id, task);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeTask(@Param() { id }: IdMongoDbParams) {
    return this.tasksService.removeTask(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  async getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
