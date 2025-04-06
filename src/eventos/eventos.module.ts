import { Module } from "@nestjs/common";
import { EventosController } from "./eventos.controller";
import { EventosArmazenados } from "./eventos.dm";

@Module({
    imports: [],
    controllers: [EventosController],
    providers:[EventosArmazenados]
})
export class EventosModule{}