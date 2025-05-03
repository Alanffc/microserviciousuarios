import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UsuariosService {
  async create(data) {
    const response = await axios.post('http://localhost:3000/Registrar-Usuario', data)
    const usuarios = await axios.get('http://localhost:3000/obtUsuarios')
    return usuarios.data;
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
