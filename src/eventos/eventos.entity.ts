export class EventosEntity{
    categoria: string;
    data: string;
    local: string;
    qtdParticipantes: string;

    constructor(categoria: string, data: string, local:string, qtdParticipantes: string ){
        const saltOrRounds = 10;

        this.categoria = categoria;
        this.data = data;
        this.local = local;
        this.qtdParticipantes = qtdParticipantes
    }
}