export class ListaEventosDTO{
    constructor(
        readonly id: string,
        readonly idCategoria: string,
        readonly data: string,
        readonly local: string,
        readonly qtdParticipantes: string,
        ){}
}