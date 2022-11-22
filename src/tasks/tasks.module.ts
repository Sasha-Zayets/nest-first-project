import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksResolver } from './tasks.resolver';
import { TaskSchema } from './models/task.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'tasks', schema: TaskSchema }])],
  providers: [TasksService, TasksResolver],
  controllers: [TasksController],
})
export class TasksModule {}
