import { ValidateIf, IsNotEmpty, MinLength } from 'class-validator';

export class UpdateChatDto {
  @ValidateIf((o) => o.name)
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}
