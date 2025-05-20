// import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
// import { EventosArmazenados } from "./Eventos.dm";
// import { EventosEntity } from "./Eventos.entity";
// import { criaEventosDTO } from "./dto/Eventos.dto";
// import {v4 as uuid} from 'uuid';
// import { ListaEventosDTO } from "./dto/consulta.dto";
// import { alteraEventosDTO } from "./dto/alteraEventos.dto";
// import { ApiBadRequestResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

// @ApiTags('Eventos')
// @Controller('/Eventos')
// export class EventosController{
//     constructor(private readonly clsEventosArmazenados: EventosArmazenados){}
       
//     @Post()
//     @ApiResponse({status: 201, description:"Retorna que houve sucesso ao criar um Evento."})
//     @ApiBadRequestResponse({description: "Retorna que alguma informação não foi informada devidamente."})
//     async criaEventos(@Body() dadosEventos: criaEventosDTO){
//         var mensagemErro = '';

//         var novoEventos = new EventosEntity(uuid(),                                            
//                                             dadosEventos.idCategoria,
//                                             dadosEventos.data,
//                                             dadosEventos.local,
//                                             dadosEventos.qtdParticipantes);
//         this.clsEventosArmazenados.AdicionarEventos(novoEventos);

//         var Eventos = {
//             dadosEventos : novoEventos,
//             status: "Evento Criado"
//         }
//         return Eventos;
//     }

//     @Get()
//     async listaEventos(){
        

//         const EventosListados = this.clsEventosArmazenados.Eventos;
//         const listaRetorno = EventosListados.map(
//             Eventos => new ListaEventosDTO(
//                 Eventos.id,
//                 Eventos.idCategoria,
//                 Eventos.data,
//                 Eventos.local,
//                 Eventos.qtdParticipantes
//             )
//         );
        
//         return listaRetorno;
//     }

//     @Put('/:id')
//     async atualizaEventos(@Param('id') id: string, @Body() novosDados: alteraEventosDTO){
//         var messageError = '';

//         const EventosAtualizado = await this.clsEventosArmazenados.atualizaEventos(id, novosDados)

//         return{
//             Eventos: EventosAtualizado,
//             message: 'Eventos atualizado' + messageError
//         }
//     }

//     @Delete('/:id')
//     async removeEventos(@Param('id') id: string){
//         const EventosRemovido = await this.clsEventosArmazenados.removeEventos(id)

//         return{
//             usuario: EventosRemovido,
//             message: 'Evento removido'
//         }
//     }

    
// }





import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { criaUsuarioDTO } from "../usuario/dto/usuario.dto";
import { RetornoUsuarioDTO } from "../usuario/dto/retornoUsuario.dto";
import { ListagemUsuariosDTO, ListaUsuarioDTO } from "../usuario/dto/listaUsuario.dto";
import { loginUsuarioDTO } from "../usuario/dto/loginUsuario.dto";
import { alteraUsuarioDTO } from "../usuario/dto/alteraUsuario.dto";
import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { EVENTOService } from "../eventos/Eventos.service";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { criaEventosDTO } from "./dto/Eventos.dto";
import { RetornoEventosDTO } from "./dto/retornoEventos.dto";
import { ListaEventosDTO } from "./dto/consulta.dto";
import { ListagemEventosDTO } from "./dto/listaEventos.dto";

@ApiTags('eventos')
@Controller('/eventos')
export class EventosController{
    
    constructor(private readonly eventosService: EVENTOService){}
    @Post()
    @ApiCreatedResponse({ description:'Retorna que houve sucesso na inclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na inclusão.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async criaEventos(@Body() dadosUsuario: criaEventosDTO): Promise <RetornoCadastroDTO>{       
        return this.eventosService.inserir(dadosEventos) 
    }

    @Post('/login')
    @ApiResponse({status: 201, description:'Retorna que houve sucesso na consulta'})    
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async fazerLogin(@Body() dadosLogin: loginUsuarioDTO){
        var retornoLogin = await this.eventosService.Login(dadosLogin.EMAIL,dadosLogin.SENHA) 
        var retorno = new RetornoEventosDTO(retornoLogin.status?'Login efetuado, sucesso':'Email ou senha invalidos!',retornoLogin.eventos);        

        return retorno;       
    }

    @Put('/:id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na alteração'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na alteração.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async alteraUsuario(@Body() dadosNovos: alteraUsuarioDTO,@Param('id') id: string){
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