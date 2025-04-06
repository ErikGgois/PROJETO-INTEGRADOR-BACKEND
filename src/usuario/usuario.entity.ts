import * as bcrypt from 'bcrypt';

export class UsuarioEntity{
    id: string;
    nome: string;
    idade: Number;
    email: string;
    senha: string; 

    constructor(id: string,nome: string,idade: Number,email: string,senha: string){
        const saltOrRounds = 10;

        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.senha = bcrypt.hashSync(senha,saltOrRounds);
    }

    trocarSenha(senhaNova){
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senhaNova,saltOrRounds);
    }

    login(senha){
        return bcrypt.compareSync(senha,this.senha);
    }
}