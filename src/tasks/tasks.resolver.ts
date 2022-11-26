import { Args, Query, Resolver, Mutation, ID } from '@nestjs/graphql';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './inputs/create.task.input';
import { UpdateTaskInput } from './inputs/update.task.input';
import { RemoveTask } from './types/remove.task.response';
import { Req, UseGuards } from '@nestjs/common';
import { GraphqlJwtAuthGuard } from 'src/auth/graphql-jwt.guard';
import { RequestWithUser } from 'src/user/types/requestWithUser.interface';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => Task)
  @UseGuards(GraphqlJwtAuthGuard)
  async getTaskById(@Args('id', { type: () => String }) id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Mutation(() => Task)
  @UseGuards(GraphqlJwtAuthGuard)
  async createTask(
    @Args('task') task: CreateTaskInput,
    @Req() req: RequestWithUser,
  ) {
    return this.tasksService.createTask(task, req.user);
  }

  @Mutation(() => Task)
  @UseGuards(GraphqlJwtAuthGuard)
  async updateTask(
    @Args('id', { type: () => ID }) id: string,
    @Args('task') task: UpdateTaskInput,
  ) {
    return this.tasksService.updateTask(id, task);
  }

  @Mutation(() => RemoveTask)
  @UseGuards(GraphqlJwtAuthGuard)
  async removeTask(@Args('id', { type: () => ID }) id: string) {
    await this.tasksService.removeTask(id);
    return { completed: true };
  }

  @Query(() => [Task])
  @UseGuards(GraphqlJwtAuthGuard)
  async getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
