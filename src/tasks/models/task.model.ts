import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.model';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user: User;

  @Prop({ type: Boolean, required: true })
  done: boolean;

  @Prop({ type: String, maxlength: 255 })
  description: boolean;

  @Prop({ type: Date })
  endDate: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
