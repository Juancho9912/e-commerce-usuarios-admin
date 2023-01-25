import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Configuracion } from '../llaves/configuracion';
import { Credenciales, Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
const fetch = require('node-fetch');

@injectable({scope: BindingScope.TRANSIENT})
export class SesionUsuariosService {
  constructor(@repository(UsuarioRepository)
  private usuarioRepository: UsuarioRepository) {}

  async IdentificarUsuario(credenciales: Credenciales){
    let usuario = await this.usuarioRepository.findOne({
      where:{
        correo: credenciales.usuario,
        clave: credenciales.clave
      }
    });
    return usuario;
  }

  async GenerarToken(datos: Usuario){
    let url_crear_token = `${Configuracion.url_crear_token}?${Configuracion.arg_nombre_token}=${datos.nombre}&${Configuracion.arg_id_persona_token}=${datos._id}&${Configuracion.arg_id_rol_token}=${datos.rolId}`;
    let token = "";
    await fetch(url_crear_token)
      .then(async (res: any) => {
        token = await res.text();
        console.log(token);
      })
    return token;
  }

}


