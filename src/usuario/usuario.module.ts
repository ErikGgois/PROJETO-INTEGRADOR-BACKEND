import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuariosArmazenados } from "../usuario/usuario.dm";
import { EmailUnicoValidator } from "./validacao/email-unico.validator";
import { strongPassValidator } from "../usuario/validacao/senha-forte.validator";


@Module({
    imports:[],
    controllers:[UsuarioController],
    providers:[UsuariosArmazenados,EmailUnicoValidator,strongPassValidator]
})
export class UsuarioModule{}