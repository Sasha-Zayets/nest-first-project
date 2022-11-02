import { IsNotEmpty, MinLength, IsBoolean } from 'class-validator';
export class CreateTaskDto {
  @IsNotEmpty()
  @MinLength(2, {
    message: 'Title is too short, Minimal length $constraint1',
  })
  title: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}

export class UpdateTaskDto {
  title?: string;
  done?: boolean;
}
