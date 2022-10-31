import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post('')
  async createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(id, task);
  }

  @Delete(':id')
  async removeTask(@Param('id') id: string) {
    return this.tasksService.removeTask(id);
  }

  @Get('all')
  async getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
