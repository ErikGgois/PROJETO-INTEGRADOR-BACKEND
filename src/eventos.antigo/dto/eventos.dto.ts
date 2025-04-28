import { IsNotEmpty, IsString } from "class-validator";

export class criaEventosDTO{
    @IsString()
    @IsNotEmpty({message: 'Preenche uma categoria válida'})
    categoria: string;

    @IsString()
    @IsNotEmpty({message: 'Preencha com uma data válida'})
    data: string;

    @IsString()
    @IsNotEmpty({message: 'Preencha com um enderço válido'})
    local: string;


    @IsString()
    @IsNotEmpty({message: 'Preencha com o número de participantes necessários'})
    qtdParticipantes: string;

}