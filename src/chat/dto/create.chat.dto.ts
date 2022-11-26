import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateChatDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}
