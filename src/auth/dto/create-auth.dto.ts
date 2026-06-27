import { IsNotEmpty, IsString, IsEmail, IsNumber, Length, Min, Max, IsOptional, IsPhoneNumber } from 'class-validator';
export class CreateAuthDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 20, {
        message: 'Username must be between 3 and 20 characters long '
    })
    username: string;
    @IsEmail({},{
        message: 'Please provice a avalid email address '
    })
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsNumber()
    @Min(18)
    @Max(60)
    @IsNotEmpty()
    age!: number;
    @IsOptional()
    @IsString()
    bio?: string;
    @IsString({each: true})
    @IsOptional()
    skills?: string[];
    @IsPhoneNumber('EG')
    @IsOptional()
    phone?: string
}

