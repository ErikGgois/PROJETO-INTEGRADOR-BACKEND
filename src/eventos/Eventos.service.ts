import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import Datas from 'src/utils/data';
import { EVENTOS } from './Eventos.entity';
import { alteraEventosDTO } from './dto/alteraEventos.dto';
import { criaEventosDTO } from './dto/Eventos.dto';



@Injectable()
export class EVENTOService {
  objDatas: Datas;
  constructor(
    @Inject('EVENTOS_REPOSITORY')
    private eventosRepository: Repository<EVENTOS>,
  ) {
    this.objDatas = new Datas();
  }

  async listar(): Promise<EVENTOS[]> {
    return await this.eventosRepository.find();
  }

  async inserir(dados: criaEventosDTO): Promise<RetornoCadastroDTO> {
    let eventos = new EVENTOS();
    eventos.ID = uuid();
    eventos.DATA = dados.DATA;
    eventos.IDCATEGORIA = dados.IDCATEGORIA;
    eventos.LOCAL = dados.LOCAL;
    eventos.QTDPARTICIPANTES = dados.QTDPARTICIPANTES;
    return this.eventosRepository.save(eventos)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: eventos.ID,
          message: "Evento cadastrado!"
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: "",
          message: "Houve um erro ao cadastrar." + error.message
        };
      })
  }

  async localizarID(ID: string): Promise<EVENTOS> {
    const objeto = await this.eventosRepository.findOne({
      where: {
        ID,
      },
    });

    if (!objeto) {
      throw new Error(`EVENTO com ID ${ID} não encontrado`);
    }

    return objeto;
  }


  async remover(ID: string): Promise<RetornoObjDTO> {
    const eventos = await this.localizarID(ID);

    return this.eventosRepository.remove(eventos)
      .then((result) => {
        return <RetornoObjDTO>{
          return: eventos,
          message: "EVENTO excluido!"
        };
      })
      .catch((error) => {
        return <RetornoObjDTO>{
          return: eventos,
          message: "Houve um erro ao excluir." + error.message
        };
      });
  }

  async alterar(id: string, dados: alteraEventosDTO): Promise<RetornoCadastroDTO> {
    const eventos = await this.localizarID(id);

    Object.entries(dados).forEach(
      ([chave, valor]) => {
        if (chave === 'ID') {
          return;
        }
        else {
          eventos[chave] = valor;
        }
      }
    )

    return this.eventosRepository.save(eventos)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: eventos.ID,
          message: "Evento alterado!"
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: "",
          message: "Houve um erro ao alterar." + error.message
        };
      });
  }


}