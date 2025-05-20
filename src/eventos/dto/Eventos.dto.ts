import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class criaEventosDTO{
  SENHA(SENHA: any) {
    throw new Error('Method not implemented.');
  }
    
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @ApiProperty({
        example: 'Volei',
        description: 'Esse campo vai ser utilizado como identificação do evento, deve ser informado um nome completo'
    })
    IDCATEGORIA:string;

    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @ApiProperty({
        example: '25/07/2025',
        description: 'Esse campo vai ser utilizado para informar a data do evento'
    })
    DATA:string;

    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @ApiProperty({
        example: 'Saquarema',
        description: 'Esse campo vai ser utilizado para informar o local do evento'
    })
    LOCAL:string;

    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @ApiProperty({
        example: '12',
        description: 'Esse campo vai ser utilizado para informar quantos participantes tera no evento'
    })
    QTDPARTICIPANTES:string;
  NOME: any;
  IDADE: any;
  EMAIL: any;



}