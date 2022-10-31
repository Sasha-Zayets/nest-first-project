export class CreateTaskDto {
  title: string;
  done: boolean;
}

export class UpdateTaskDto {
  title?: string;
  done?: boolean;
}
