import { Query, Resolver } from '@nestjs/graphql';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';

@Resolver(of => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => Task)
  async getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
