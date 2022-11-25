import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { User } from 'src/user/user.model';

export type TaskDocument = Task & Document;

@ObjectType()
@Schema()
export class Task {
  _id: string;

  @Field()
  @ApiProperty()
  @Prop({ type: String, required: true })
  title: string;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user: User;

  @Field()
  @ApiProperty()
  @Prop({ type: Boolean, required: true })
  done: boolean;

  @Field()
  @ApiProperty()
  @Prop({ type: String, maxlength: 255 })
  description: string;

  @Field()
  @ApiProperty()
  @Prop({ type: Date })
  endDate: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
