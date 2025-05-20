import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { FilesModule } from './files/files.module';
import { EventosModule } from './eventos/Eventos.module';

@Module({
  imports: [UsuarioModule,FilesModule, EventosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
