import {
  MinLength,
  IsBoolean,
  MaxLength,
  ValidateIf,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateTaskDto {
  @MinLength(2, {
    message: 'Title is too short, Minimal length $constraint1',
  })
  title?: string;

  @ValidateIf((o) => o.done)
  @IsBoolean()
  done?: boolean;

  @ValidateIf((o) => o.description)
  @MaxLength(255, {
    message: 'Description is too long, Maximal length $constraint1',
  })
  description?: string;

  @ValidateIf((o) => o.endDate)
  @IsDate()
  @Type(() => Date)
  endDate?: Date;
}
