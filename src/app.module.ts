import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { EventosModule } from './eventos/Eventos.module';

@Module({
  imports: [UsuarioModule, EventosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
