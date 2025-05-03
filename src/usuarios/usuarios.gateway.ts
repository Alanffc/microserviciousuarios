import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { UsuariosService } from './usuarios.service';
import { Server } from 'socket.io';

@WebSocketGateway()
export class UsuariosGateway {
  constructor(private readonly usuariosService: UsuariosService) {}
  @WebSocketServer()
  server : Server

  @SubscribeMessage('createUsuario')
  async create(@MessageBody() data) {
    const response = await this.usuariosService.create(data);
    this.server.emit('findAllUsuarios', response);
  }

  @SubscribeMessage('findAllUsuarios')
  findAll() {
    return this.usuariosService.findAll();
  }

  @SubscribeMessage('findOneUsuario')
  findOne(@MessageBody() id: number) {
    return this.usuariosService.findOne(id);
  }

  @SubscribeMessage('updateUsuario')
  update(@MessageBody() updateUsuarioDto) {
    return this.usuariosService.update(updateUsuarioDto.id, updateUsuarioDto);
  }

  @SubscribeMessage('removeUsuario')
  remove(@MessageBody() id: number) {
    return this.usuariosService.remove(id);
  }
}
