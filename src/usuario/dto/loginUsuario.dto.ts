import { IsEmail, MinLength } from "class-validator";

export class loginUsuarioDTO{
    
    @IsEmail(undefined, {message: "email inválido"})
    EMAIL: string;

    @MinLength(6, {message: "senha deve ter no minimo 8 digitos"})
    SENHA:string;
    
}