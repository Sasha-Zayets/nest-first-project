import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/user.model';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/edit.task.dto';
import { TaskDocument, Task } from './models/task.model';
import { TASKS_DOCUMENT_NAME } from './tasks.constants';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(TASKS_DOCUMENT_NAME) private taskModel: Model<TaskDocument>,
  ) {}

  async getTaskById(id: string): Promise<Task> {
    return this.taskModel.findById(id);
  }

  async createTask(task: CreateTaskDto, user: User): Promise<Task> {
    return this.taskModel.create({
      ...task,
      user: user._id,
    });
  }

  async removeTask(id: string) {
    return this.taskModel.deleteOne({ _id: id });
  }

  async updateTask(id: string, task: UpdateTaskDto): Promise<Task> {
    return this.taskModel.findOneAndUpdate({ _id: id }, task, {
      new: true,
    });
  }

  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.find();
  }
}
