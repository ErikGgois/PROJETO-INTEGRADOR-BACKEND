export class ListaEventosDTO{
    constructor(
        readonly ID: string,
        readonly IDCATEGORIA: string,
        readonly DATA: string,
        readonly LOCAL: string,
        readonly QTDPARTICIPANTES: string,
        ){}
}