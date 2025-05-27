export class ListaEventosDTO{
    constructor(
        readonly IDCATEGORIA: string,
        readonly DATA: string,
        readonly LOCAL: string,
        readonly QTDPARTICIPANTES: string
    ){}
}

export class ListagemEventosDTO{
    constructor(
        readonly EVENTOS: ListaEventosDTO[],
    ){}
}