import { InputType, Field } from '@nestjs/graphql';
import {
  MinLength,
  IsBoolean,
  MaxLength,
  ValidateIf,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class UpdateTaskInput {
  @Field({ nullable: true })
  @MinLength(2, {
    message: 'Title is too short, Minimal length $constraint1',
  })
  title?: string;

  @Field({ nullable: true })
  @ValidateIf((o) => o.done)
  @IsBoolean()
  done?: boolean;

  @Field({ nullable: true })
  @ValidateIf((o) => o.description)
  @MaxLength(255, {
    message: 'Description is too long, Maximal length $constraint1',
  })
  description?: string;

  @Field({ nullable: true })
  @ValidateIf((o) => o.endDate)
  @IsDate()
  @Type(() => Date)
  endDate?: Date;
}
