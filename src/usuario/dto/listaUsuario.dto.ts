export class ListaUsuarioDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly IDADE: string,
        readonly EMAIL: string,
        readonly SENHA: string
    ){}
}

export class ListagemUsuariosDTO{
    constructor(
        readonly USUARIO: ListaUsuarioDTO[],
    ){}
}
