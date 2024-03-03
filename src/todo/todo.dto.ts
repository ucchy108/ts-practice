import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;
}

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsNumberString()
  id: string;
}
