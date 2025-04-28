export class ListaUsuarioDTO{
    constructor(
        readonly id: string,
        readonly idCategoria: string,
        readonly data: string,
        readonly local: string
        ){}
}