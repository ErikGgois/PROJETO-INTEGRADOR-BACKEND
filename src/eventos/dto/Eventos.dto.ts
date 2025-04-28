import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class criaEventosDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @ApiProperty({
        example: 'Volei',
        description: 'Esse campo vai ser utilizado como identificação do evento, deve ser informado um nome completo'
    })
    id:string;

    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @ApiProperty({
        example: 'Volei',
        description: 'Esse campo vai ser utilizado como identificação do evento, deve ser informado um nome completo'
    })
    idCategoria:string;

    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @ApiProperty({
        example: '25/07/2025',
        description: 'Esse campo vai ser utilizado para informar a data do evento'
    })
    data:string;

    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @ApiProperty({
        example: 'Saquarema',
        description: 'Esse campo vai ser utilizado para informar o local do evento'
    })
    local:string;

    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @ApiProperty({
        example: '12',
        description: 'Esse campo vai ser utilizado para informar quantos participantes tera no evento'
    })
    qtdParticipantes:string;



}