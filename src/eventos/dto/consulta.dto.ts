export class ListaEventosDTO{
    constructor(
        readonly categoria: string,
        readonly data: string,
        readonly local: string,
        readonly qtdParticipantes: string,
        ){}
}