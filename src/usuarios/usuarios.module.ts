import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosGateway } from './usuarios.gateway';

@Module({
  providers: [UsuariosGateway, UsuariosService],
})
export class UsuariosModule {}
