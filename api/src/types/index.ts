import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  name: string;

  @IsString()
  bio: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UpdateProfileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  bio: string;

  @IsInt()
  @IsNotEmpty()
  userId: number;
}

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsInt()
  @IsNotEmpty()
  authorId: number;
}

export class UpdatePostDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  content: string;
}
