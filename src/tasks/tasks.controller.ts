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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/edit.task.dto';
import IdMongoDbParams from 'src/utils/validation/idMongoDbParams';
import { Task } from './models/task.model';

@ApiTags('tasks')
@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOperation({ summary: 'Get Task for ID' })
  @ApiResponse({ status: 200, description: 'Get task by ID', type: Task })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getTaskById(@Param() { id }: IdMongoDbParams) {
    return this.tasksService.getTaskById(id);
  }

  @ApiOperation({ summary: 'Create Task' })
  @ApiResponse({ status: 200, description: 'Create new Task', type: Task })
  @UseGuards(JwtAuthGuard)
  @Post('')
  async createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @ApiOperation({ summary: 'Update task' })
  @ApiResponse({ status: 200, description: 'Update new task', type: Task })
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateTask(
    @Param() { id }: IdMongoDbParams,
    @Body() task: UpdateTaskDto,
  ) {
    return this.tasksService.updateTask(id, task);
  }

  @ApiOperation({ summary: 'Delete task' })
  @ApiResponse({ status: 200, description: 'Delete new Task' })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeTask(@Param() { id }: IdMongoDbParams) {
    return this.tasksService.removeTask(id);
  }

  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Get list with tasks', type: Task })
  @UseGuards(JwtAuthGuard)
  @Get('')
  async getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
