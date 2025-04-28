import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EventosArmazenados } from "./Eventos.dm";
import { EventosEntity } from "./Eventos.entity";
import { criaEventosDTO } from "./dto/Eventos.dto";
import {v4 as uuid} from 'uuid';
import { ListaEventosDTO } from "./dto/consulta.dto";
import { alteraEventosDTO } from "./dto/alteraEventos.dto";
import { ApiBadRequestResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Eventos')
@Controller('/Eventos')
export class EventosController{
    constructor(private readonly clsEventosArmazenados: EventosArmazenados){}
       
    @Post()
    @ApiResponse({status: 201, description:"Retorna que houve sucesso ao criar um Evento."})
    @ApiBadRequestResponse({description: "Retorna que alguma informação não foi informada devidamente."})
    async criaEventos(@Body() dadosEventos: criaEventosDTO){
        var mensagemErro = '';

        var novoUsuario = new EventosEntity(uuid(),dadosEventos.id,
                                            dadosEventos.idCategoria,
                                            dadosEventos.data,
                                            dadosEventos.local,
                                            dadosEventos.qtdParticipantes);
        this.clsEventosArmazenados.AdicionarEventos(novoEventos);

        var Eventos = {
            dadosEventos : novoEventos,
            status: "Evento Criado"
        }
        return Eventos;
    }

    @Get()
    async listaEventos(){
        

        const EventosListados = this.clsEventosArmazenados.Eventos;
        const listaRetorno = EventosListados.map(
            Eventos => new ListaEventosDTO(
                Eventos.id,
                Eventos.idCategoria,
                Eventos.data,
                Eventos.local,
                Eventos.qtdParticipantes
            )
        );
        
        return listaRetorno;
    }

    @Put('/:id')
    async atualizaEventos(@Param('id') id: string, @Body() novosDados: alteraEventosDTO){
        var messageError = '';

        const EventosAtualizado = await this.clsEventosArmazenados.atualizaEventos(id, novosDados)

        return{
            Eventos: EventosAtualizado,
            message: 'Eventos atualizado' + messageError
        }
    }

    @Delete('/:id')
    async removeEventos(@Param('id') id: string){
        const EventosRemovido = await this.clsEventosArmazenados.removeEventos(id)

        return{
            usuario: EventosRemovido,
            message: 'Evento removido'
        }
    }

    
}