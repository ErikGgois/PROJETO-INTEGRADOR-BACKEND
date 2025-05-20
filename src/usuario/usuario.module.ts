import { Module } from '@nestjs/common';
import { UsuarioController } from '../usuario/usuario.controller';
import { USUARIOService } from './usuario.service';
import { usuarioProviders } from './usuario.providers';
import { DatabaseModule } from '../database/database.module';
import { EmailUnicoValidator } from './validacao/email-unico.validator';

@Module({  
  imports: [DatabaseModule],
  controllers: [UsuarioController],  
  providers: [
    ...usuarioProviders,
    EmailUnicoValidator,
    USUARIOService
  ],
  exports: [
    ...usuarioProviders
  ]
})
export class UsuarioModule {}