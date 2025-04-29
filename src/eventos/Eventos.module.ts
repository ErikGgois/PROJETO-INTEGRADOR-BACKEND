import { Module } from "@nestjs/common";
import { EventosController } from "./Eventos.controller";
import { EventosArmazenados } from "../eventos/Eventos.dm";



@Module({
    imports:[],
    controllers:[EventosController],
    providers:[EventosArmazenados]
})
export class EventosModule{}