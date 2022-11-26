import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksResolver } from './tasks.resolver';
import { TaskSchema } from './models/task.model';
import { TASKS_DOCUMENT_NAME } from './tasks.constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TASKS_DOCUMENT_NAME, schema: TaskSchema },
    ]),
  ],
  providers: [TasksService, TasksResolver],
  controllers: [TasksController],
})
export class TasksModule {}
