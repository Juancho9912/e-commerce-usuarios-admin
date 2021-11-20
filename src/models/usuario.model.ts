import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import {Rol} from './rol.model';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'boolean',
    default: true,
  })
  estado?: boolean;

  @belongsTo(() => Rol, {name: 'tiene_un'})
  rolId: string;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
