import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuariosArmazenados } from "../usuario/usuario.dm";
import { strongPassValidator } from "../usuario/validacao/senha-forte.validator";


@Module({
    imports:[],
    controllers:[EventosController],
    providers:[EventosArmazenados]
})
export class EventosModule{}