import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
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

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  bio: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}

export class UpdateProfileDto {
  // @IsString()
  // @IsNotEmpty()
  // id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  bio: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
