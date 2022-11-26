import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { IdDoc } from 'src/common/types/global.types';
import { USER_DOCUMENT_NAME } from 'src/user/user.constants';
import { User } from 'src/user/user.model';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  _id: IdDoc;

  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    name: USER_DOCUMENT_NAME,
  })
  author: IdDoc;

  @Prop({ type: Array, required: true })
  users: User[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
