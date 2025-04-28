import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class alteraEventosDTO {
    @IsString()
    @IsNotEmpty({ message: "nome Não pode ser vazio" })
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Volei',
        description: 'Esse campo vai ser utilizado como identificação do Evento, deve ser informado um nome completo'
    })
    id: string;


    @IsString()
    @IsNotEmpty({ message: "nome Não pode ser vazio" })
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Volei',
        description: 'Esse campo vai ser utilizado como identificação da categoria do evento'
    })
    idCategoria: string;

    @IsString()
    @IsNotEmpty({ message: "data Não pode ser vazio" })
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Volei',
        description: 'Esse campo vai ser utilizado para informar a data do evento'
    })
    data: string;

    @IsString()
    @IsNotEmpty({ message: "data Não pode ser vazio" })
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Volei',
        description: 'Esse campo vai ser utilizado para informar a data do evento'
    })
    local: string;

    @IsString()
    @IsNotEmpty({ message: "data Não pode ser vazio" })
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Volei',
        description: 'Esse campo vai ser utilizado para informar a data do evento'
    })
    localqtdParticipantes: string;
}
