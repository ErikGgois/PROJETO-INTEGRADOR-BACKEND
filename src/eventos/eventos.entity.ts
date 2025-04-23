export class EventosEntity{
    id: string;
    categoria: string;
    data: string;
    local: string;
    qtdParticipantes: string;

    constructor(id: string,categoria: string, data: string, local:string, qtdParticipantes: string ){
        const saltOrRounds = 10;

        this.id = id;
        this.categoria = categoria;
        this.data = data;
        this.local = local;
        this.qtdParticipantes = qtdParticipantes;
    }
}
