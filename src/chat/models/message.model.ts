import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.model';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  _id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user: User;

  @Prop({ type: String, maxlength: 100, required: true })
  text: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
