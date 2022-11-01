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
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('')
  async createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(id, task);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeTask(@Param('id') id: string) {
    return this.tasksService.removeTask(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  async getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
