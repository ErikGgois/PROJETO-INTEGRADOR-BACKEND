import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { USUARIO } from '../usuario/usuario.entity';
import { criaUsuarioDTO } from '../usuario/dto/usuario.dto';
import { alteraUsuarioDTO } from '../usuario/dto/alteraUsuario.dto';
import Datas from 'src/utils/data';



@Injectable()
export class USUARIOService {
  objDatas: Datas;
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<USUARIO>,
  ) {
    this.objDatas = new Datas();
  }

  async listar(): Promise<USUARIO[]> {
  return await this.usuarioRepository.find();
}

  async inserir(dados: criaUsuarioDTO): Promise<RetornoCadastroDTO> {
    let usuarios = new USUARIO();
    usuarios.ID = uuid();
    usuarios.NOME = dados.NOME;
    usuarios.IDADE = dados.IDADE;

    usuarios.EMAIL = dados.EMAIL;
    usuarios.trocaSenha(dados.SENHA);
    
    return this.usuarioRepository.save(usuarios)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: usuarios.ID,
          message: "USUARIO cadastrado!"
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: "",
          message: "Houve um erro ao cadastrar." + error.message
        };
    })
  }

  async localizarID(ID: string): Promise<USUARIO> {
    const objeto = await this.usuarioRepository.findOne({
      where: {
        ID,
      },
    });

    if (!objeto) {
        throw new Error(`PESSOA com ID ${ID} não encontrado`);
    }

    return objeto;
  }

  async localizarEmail(EMAIL: string): Promise<USUARIO> {
    const objeto = await this.usuarioRepository.findOne({
      where: {
        EMAIL,
      },
    });

    if (!objeto) {
        throw new Error(`PESSOA com EMAIL ${EMAIL} não encontrado`);
    }

    return objeto;
  }

  async Login(EMAIL: string, SENHA: string) {
    //primeiro é pesquisado o usuário por meio do email
    const possivelUsuario = await this.localizarEmail(EMAIL)

    return {
      //aqui é validada a senha, caso a senha esteja correta, é retornado os dados do usuário e também o status (true para correto, false para incorreto)
      usuarios: possivelUsuario ? (possivelUsuario.login(SENHA) ? possivelUsuario : null) : null,
      status: possivelUsuario ? possivelUsuario.login(SENHA): false
    };
  }

  async validaEmail(emailNovo: string) {
    const possivelUsuario = await this.localizarEmail(emailNovo)

    return (possivelUsuario == null)
  }


  async remover(ID: string): Promise<RetornoObjDTO> {
    const usuario = await this.localizarID(ID);

    return this.usuarioRepository.remove(usuario)
      .then((result) => {
        return <RetornoObjDTO>{
          return: usuario,
          message: "USUARIO excluido!"
        };
      })
      .catch((error) => {
        return <RetornoObjDTO>{
          return: usuario,
          message: "Houve um erro ao excluir." + error.message
        };
      });
  }

  async alterar(id: string, dados: alteraUsuarioDTO): Promise<RetornoCadastroDTO> {
    const usuario = await this.localizarID(id);

    Object.entries(dados).forEach(
      ([chave, valor]) => {
        if (chave === 'ID') {
          return;
        }
        else{
          usuario[chave] = valor;
        }
      }
    )

    return this.usuarioRepository.save(usuario)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: usuario.ID,
          message: "USUARIO alterado!"
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: "",
          message: "Houve um erro ao alterar." + error.message
        };
      });
    }

    async buscarPorEmail(email: string): Promise<USUARIO | null> {
  return await this.usuarioRepository.findOne({ where: { EMAIL: email } });
}

}