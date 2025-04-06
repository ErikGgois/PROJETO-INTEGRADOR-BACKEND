import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { criaEventosDTO } from "../eventos/dto/eventos.dto";
import { ListaEventosDTO } from "../eventos/dto/consulta.dto";

import {v4 as uuid} from 'uuid';
import { ApiBadRequestResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { EventosArmazenados } from '../eventos/eventos.dm';
import { alteraEventosDTO } from "./dto/alteraEventos.dto";
import { EventosEntity } from "./eventos.entity";

@ApiTags('eventos')
@Controller('/eventos')
    export class EventosController{
        constructor(private readonly clsEventosArmazenados: EventosArmazenados){}

        @Post()
        @ApiResponse({status: 201, description:"Retorna que houve sucesso ao criar um evento."})
        @ApiBadRequestResponse({description: "Retorna que alguma informação não foi informada devidamente."})
        async criaEvento(@Body() dadosEvento: criaEventosDTO){
            var mensagemErro = '';

            var novoEvento = new EventosEntity(uuid(),dadosEvento.categoria,
                                                dadosEvento.data,
                                                dadosEvento.local,
                                            dadosEvento.qtdParticipantes);
            this.clsEventosArmazenados.AdicionarEvento(novoEvento);

            var evento = {
                dadosEvento : novoEvento,
                status: "Evento Criado"
            }
            return evento;
    }

        @Get()
        async listaEventos(){
            const eventosListados = this.clsEventosArmazenados.Eventos;
            const listaRetorno = eventosListados.map(
                evento => new ListaEventosDTO(
                    evento.id,
                    evento.categoria,
                    evento.data,
                    evento.local,
                )
            );
            
            return listaRetorno;
        }
        @Put('/:id')
        async atualizaEvento(@Param('id') id: string, @Body() novosDados: alteraEventosDTO){
            var messageError = '';

            const eventoAtualizado = await this.clsEventosArmazenados.atualizaEvento(id, novosDados)

            return{
                evento: eventoAtualizado,
                message: 'Evento atualizado' + messageError
            }
        }

        @Delete('/:id')
        async deletaEvento(@Param('id') id: string){    
            var messageError = '';

            const eventoDeletado = await this.clsEventosArmazenados.deletaEvento(id);

            return{
                evento: eventoDeletado,
                message: 'Evento deletado' + messageError
            }
        }
    }
    