import * as bcrypt from 'bcrypt';

export class UsuarioEntity{
    id: string;
    idCategoria: string;
    data: string;
    local: string;
    qtdParticipantes: string;

    constructor(id: string,idCategoria: string,data: string,local: string,qtdParticipantes: string){
        const saltOrRounds = 10;

        this.id = id;
        this.idCategoria = idCategoria;
        this.data = data;
        this.local = local;
        this.qtdParticipantes = qtdParticipantes;
    }
}