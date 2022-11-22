import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.model';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @ApiProperty()
  @Prop({ type: String, required: true })
  title: string;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user: User;

  @ApiProperty()
  @Prop({ type: Boolean, required: true })
  done: boolean;

  @ApiProperty()
  @Prop({ type: String, maxlength: 255 })
  description: string;

  @ApiProperty()
  @Prop({ type: Date })
  endDate: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
