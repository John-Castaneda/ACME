import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Vehiculo} from './vehiculo.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
  })
  tiposolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  comentarioasesor: string;

  @property({
    type: 'string',
  })
  asesorId?: string;

  @property({
    type: 'string',
  })
  clienteId?: string;

  @hasMany(() => Vehiculo)
  private _vehiculos: Vehiculo[];

  @belongsTo(() => Vehiculo)
  vehiculoId: string;

  @hasMany(() => Vehiculo)
  vehiculos: Vehiculo[];

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
