import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.model';
import { USER_DOCUMENT_NAME } from 'src/user/user.constants';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  _id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: USER_DOCUMENT_NAME })
  user: User;

  @Prop({ type: String, maxlength: 100, required: true })
  text: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
