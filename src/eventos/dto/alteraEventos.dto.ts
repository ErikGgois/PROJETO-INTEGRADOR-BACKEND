// import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
// import { ApiPropertyOptional } from "@nestjs/swagger";

// export class alteraEventosDTO {

//     @IsString()
//     @IsNotEmpty({ message: "nome Não pode ser vazio" })
//     @IsOptional()
//     @ApiPropertyOptional({
//         example: 'Volei',
//         description: 'Esse campo vai ser utilizado como identificação da categoria do evento'
//     })
//     idCategoria: string;

//     @IsString()
//     @IsNotEmpty({ message: "data Não pode ser vazio" })
//     @IsOptional()
//     @ApiPropertyOptional({
//         example: 'Volei',
//         description: 'Esse campo vai ser utilizado para informar a data do evento'
//     })
//     data: string;

//     @IsString()
//     @IsNotEmpty({ message: "local Não pode ser vazio" })
//     @IsOptional()
//     @ApiPropertyOptional({
//         example: 'Volei',
//         description: 'Esse campo vai ser utilizado para informar o local do evento'
//     })
//     local: string;

//     @IsString()
//     @IsNotEmpty({ message: "quantidade de participantes Não pode ser vazio" })
//     @IsOptional()
//     @ApiPropertyOptional({
//         example: 'Volei',
//         description: 'Esse campo vai ser utilizado para informar a quantidade de participantes do evento'
//     })
//     qtdParticipantes: string;
// }


import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class alteraEventosDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @IsOptional()
    @ApiPropertyOptional({
            example: 'Carlos Alberto',
            description: 'Esse campo vai ser utilizado como identificação do esporte, deve ser informado um nome completo'
        })
    IDCATEGORIA:string;
    
    @IsString()
    @IsNotEmpty({message: "data Não pode ser vazio"})
    @IsOptional()
    @ApiPropertyOptional({
            example: '30/05/2025',
            description: 'Esse campo vai ser utilizado como identificação da data do evento, deve ser informado a data'
        })
    DATA: string;

    @IsString()
    @IsNotEmpty({message: "local Não pode ser vazio"})
    @IsOptional()
    @ApiPropertyOptional({
            example: 'saquarema',
            description: 'Esse campo vai ser utilizado como identificação do local do evento, deve ser informado o local'
        })
    LOCAL: string;

    @IsString()
    @IsNotEmpty({message: "local Não pode ser vazio"})
    @IsOptional()
    @ApiPropertyOptional({
            example: '12',
            description: 'Esse campo vai ser utilizado como identificação da quantidade de participantes do evento, deve ser informado a quantidade'
        })
    QTDPARTICIPANTES: string; 
}