import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { EVENTOService } from "../eventos/Eventos.service";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { criaEventosDTO } from "./dto/Eventos.dto";
import { alteraEventosDTO } from "./dto/alteraEventos.dto";
import { ListaEventosDTO, ListagemEventosDTO } from "./dto/listaEventos.dto";

@ApiTags('eventos')
@Controller('/eventos')
export class EventosController{
    
    constructor(private readonly eventosService: EVENTOService){}
    @Post()
    @ApiCreatedResponse({ description:'Retorna que houve sucesso na inclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na inclusão.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async criaEventos(@Body() dadosEventos: criaEventosDTO): Promise <RetornoCadastroDTO>{       
        return this.eventosService.inserir(dadosEventos) 
    }


    @Put('/:id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na alteração'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na alteração.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async alteraEventos(@Body() dadosNovos: alteraEventosDTO,@Param('id') id: string){
        return this.eventosService.alterar(id,dadosNovos)             
    }

    @Delete('/:id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na exclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na exclusão.'})
    async removeEventos(@Param('id') id: string){
        return this.eventosService.remover(id);   
    }

    @Get('/:ID') 
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na consulta.'})
    async retornaEventosId(@Param('ID') ID:string){
        var eventosListados = await this.eventosService.localizarID(ID);
        const ListaRetorno = new ListaEventosDTO(eventosListados.ID,
                                                eventosListados.IDCATEGORIA,
                                                eventosListados.DATA,
                                                eventosListados.LOCAL,
                                                eventosListados.QTDPARTICIPANTES)

        return {
                eventos: ListaRetorno
            };
    }


    @Get()
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    async retornaEventos(): Promise <ListagemEventosDTO>{
        var eventosListados = await this.eventosService.listar();
        const ListaRetorno = eventosListados.map(
            eventos => new ListaEventosDTO(
                eventos.ID,
                eventos.IDCATEGORIA,
                eventos.DATA,
                eventos.LOCAL,
                eventos.QTDPARTICIPANTES
            )
        );

        const retorno = new ListagemEventosDTO(ListaRetorno);


        return retorno
    }
}