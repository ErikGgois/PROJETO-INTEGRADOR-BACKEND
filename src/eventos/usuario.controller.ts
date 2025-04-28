import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuariosArmazenados } from "./usuario.dm";
import { UsuarioEntity } from "./usuario.entity";
import { criaUsuarioDTO } from "./dto/usuario.dto";

import {v4 as uuid} from 'uuid';
import { ListaUsuarioDTO } from "./dto/consulta.dto";
import { alteraUsuarioDTO } from "./dto/alteraEventos.dto";
import { loginUsuarioDTO } from "./dto/loginUsuario.dto";
import { ApiBadRequestResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Eventos')
@Controller('/Eventos')
export class UsuarioController{
    constructor(private readonly clsUsuariosArmazenados: UsuariosArmazenados){}
       
    @Post()
    @ApiResponse({status: 201, description:"Retorna que houve sucesso ao criar um Evento."})
    @ApiBadRequestResponse({description: "Retorna que alguma informação não foi informada devidamente."})
    async criaUsuario(@Body() dadosEventos: criaUsuarioDTO){
        var mensagemErro = '';

        var novoUsuario = new UsuarioEntity(uuid(),dadosEventos.id,
                                            dadosEventos.idCategoria,
                                            dadosEventos.data,
                                            dadosEventos.local,
                                            dadosEventos.qtdParticipantes);
        this.clsUsuariosArmazenados.AdicionarUsuario(novoEventos);

        var Eventos = {
            dadosEventos : novoEventos,
            status: "Evento Criado"
        }
        return Eventos;
    }

    @Get()
    async listaUsuarios(){
        

        const usuariosListados = this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
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

        const EventosAtualizado = await this.clsUsuariosArmazenados.atualizaEventos(id, novosDados)

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