// import { Module } from "@nestjs/common";
// import { EventosController } from "./Eventos.controller";
// import { EventosArmazenados } from "../eventos/Eventos.dm";



// @Module({
//     imports:[],
//     controllers:[EventosController],
//     providers:[EventosArmazenados]
// })
// export class EventosModule{}



import { Module } from '@nestjs/common';
import { UsuarioController } from '../usuario/usuario.controller';
import { DatabaseModule } from '../database/database.module';
import { EventosController } from './Eventos.controller';
import { eventosProviders } from './Eventos.providers';
import { EVENTOService } from './Eventos.service';

@Module({  
  imports: [DatabaseModule],
  controllers: [EventosController],  
  providers: [
    ...eventosProviders,
    EVENTOService
  ],
  exports: [
    ...eventosProviders
  ]
})
export class EventosModule {}