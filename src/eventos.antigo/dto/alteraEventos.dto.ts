import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class alteraEventosDTO{
    @IsString()
    @IsNotEmpty({message: "categoria Não pode ser vazio"})
    @ApiPropertyOptional({
            example: 'Festa',
            description: 'Esse campo vai ser utilizado como identificação do evento, deve ser informado uma categoria'
        })
    categoria:string;
    
    @IsString()
    @IsNotEmpty({message: "data Não pode ser vazio"})
    @ApiPropertyOptional({
            example: '2023-10-10',
            description: 'Esse campo identifica a data do evento, deve ser enviado uma data válida'
        })
    data: string;

    @IsString()
    @IsNotEmpty({message: "local Não pode ser vazio"})
    @ApiPropertyOptional({
            example: 'São Paulo',
            description: 'Esse campo identifica o local do evento, deve ser enviado um local válido'
        })
    local: string;

    @IsInt()
     @ApiPropertyOptional({
            example: 50,
            description: 'Esse campo identifica a quantidade de participantes do evento, deve ser enviado um numero'
        })
    qtdParticipantes: Number;
}