import {injectable,  inject,  BindingScope} from '@loopback/core';
import { Configuracion } from '../llaves/configuracion';
import { NotificacionSms } from '../models';
import { NotificacionCorreo } from '../models/notificacion-correo.model';
const fetch = require('node-fetch');

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) {}

  EnviarCorreo(datos: NotificacionCorreo){
    let url = `${Configuracion.urlCorreo}?${Configuracion.destinoArg}=${datos.destinatario}&${Configuracion.asuntoArg}=${datos.asunto}&${Configuracion.mensajeArg}=${datos.mensaje}&${Configuracion.hashArg}=${Configuracion.hashNotificacion}`;
    fetch(url)
    .then((res:any) => {
      console.log(res.text())
    })
  }
  EnviarSms(datos: NotificacionSms){
    let url = `${Configuracion.urlMensajeTexto}?${Configuracion.destinoArg}=${datos.destino}&${Configuracion.mensajeArg}=${datos.mensaje}&${Configuracion.hashArg}=${Configuracion.hashNotificacion}`;
    fetch(url)
    .then((res:any) => {
      console.log(res.text())
    })
  }
}
