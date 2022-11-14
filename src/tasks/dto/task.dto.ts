import {
  IsNotEmpty,
  MinLength,
  IsBoolean,
  IsString,
  MaxLength,
  ValidateIf,
} from 'class-validator';
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
}

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
}
