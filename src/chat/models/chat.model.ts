import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.model';
import { Message } from './message.model';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  _id: string;

  @Prop({ type: Array, required: true })
  users: User[];

  @Prop({ type: Array, required: true })
  messages: Message[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
