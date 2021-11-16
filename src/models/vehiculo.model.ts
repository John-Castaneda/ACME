import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class Vehiculo extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoVehiculo: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
  })
  tipoSolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoSolicitud: string;

  @property({
    type: 'number',
    required: true,
  })
  porcentajeParticipacion: number;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  encargado: string;

  @property({
    type: 'string',
    required: true,
  })
  telefonoEncargado: string;

  @property({
    type: 'string',
  })
  fotografia?: string;

  @property({
    type: 'string',
  })
  enlaceVideo?: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  @property({
    type: 'string',
  })
  solicitudId?: string;

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
