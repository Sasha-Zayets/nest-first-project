import {
  IsNotEmpty,
  MinLength,
  IsBoolean,
  IsString,
  MaxLength,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTaskDto {
  @IsNotEmpty()
  @MinLength(2, {
    message: 'Title is too short, Minimal length $constraint1',
  })
  title: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;

  @IsString()
  @MaxLength(255, {
    message: 'Description is too long, Maximal length $constraint1',
  })
  description: string;

  @IsDate()
  @Type(() => Date)
  endDate: Date;
}
