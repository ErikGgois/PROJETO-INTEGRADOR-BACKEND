import { Module } from '@nestjs/common';
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
export class EventosModule { }