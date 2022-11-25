import { InputType, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  @MinLength(2, {
    message: 'Title is too short, Minimal length $constraint1',
  })
  title: string;

  @Field()
  @IsNotEmpty()
  @IsBoolean()
  done: boolean;

  @Field()
  @IsString()
  @MaxLength(255, {
    message: 'Description is too long, Maximal length $constraint1',
  })
  description: string;

  @Field()
  @IsDate()
  @Type(() => Date)
  endDate: Date;
}
