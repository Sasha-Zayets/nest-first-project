import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @Field()
  @ApiProperty()
  @Prop({ required: true, unique: true, nullable: false })
  email: string;

  @Prop({ required: true, nullable: false })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
