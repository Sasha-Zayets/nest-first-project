import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { TaskDocument } from './models/task.model';

@Injectable()
export class TasksService {
  constructor(@InjectModel('tasks') private taskModel: Model<TaskDocument>) {}

  async getTaskById(id: string) {
    return this.taskModel.findById(id);
  }

  async createTask(task: CreateTaskDto) {
    return this.taskModel.create(task);
  }

  async removeTask(id: string) {
    return this.taskModel.deleteOne({ _id: id });
  }

  async updateTask(id: string, task: UpdateTaskDto) {
    return this.taskModel.findOneAndUpdate({ _id: id }, task, {
      new: true,
    });
  }

  async getAllTasks() {
    return this.taskModel.find();
  }
}
