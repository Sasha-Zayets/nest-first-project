import { Args, Query, Resolver, Mutation, ID } from '@nestjs/graphql';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './inputs/create.task.input';
import { UpdateTaskInput } from './inputs/update.task.input';
import { RemoveTask } from './types/remove.task.response';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => Task)
  async getTaskById(@Args('id', { type: () => String }) id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Mutation(() => Task)
  async createTask(@Args('task') task: CreateTaskInput) {
    return this.tasksService.createTask(task);
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('id', { type: () => ID }) id: string,
    @Args('task') task: UpdateTaskInput,
  ) {
    return this.tasksService.updateTask(id, task);
  }

  @Mutation(() => RemoveTask)
  async removeTask(@Args('id', { type: () => ID }) id: string) {
    await this.tasksService.removeTask(id);
    return { completed: true };
  }

  @Query(() => [Task])
  async getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
