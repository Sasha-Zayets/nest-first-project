import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './types/user.types';
import { UserDocument } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  async createUser(user: User) {
    return this.userModel.create({
      ...user,
    });
  }

  async findByUserEmail(email: string) {
    return this.userModel.findOne({ email });
  }
}
