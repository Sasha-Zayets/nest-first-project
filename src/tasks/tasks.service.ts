import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/edit.task.dto';
import { TaskDocument, Task } from './models/task.model';

@Injectable()
export class TasksService {
  constructor(@InjectModel('tasks') private taskModel: Model<TaskDocument>) {}

  async getTaskById(id: string): Promise<Task> {
    return this.taskModel.findById(id);
  }

  async createTask(task: CreateTaskDto): Promise<Task> {
    return this.taskModel.create(task);
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
