import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, Vehiculo} from '../models';
import {VehiculoRepository} from './vehiculo.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id,
  SolicitudRelations
> {

  public readonly vehiculo: BelongsToAccessor<Vehiculo, typeof Solicitud.prototype.id>;

  public readonly vehiculos: HasManyRepositoryFactory<Vehiculo, typeof Solicitud.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>,
  ) {
    super(Solicitud, dataSource);
    this.vehiculos = this.createHasManyRepositoryFactoryFor('vehiculos', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculos', this.vehiculos.inclusionResolver);
    this.vehiculo = this.createBelongsToAccessorFor('vehiculo', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculo', this.vehiculo.inclusionResolver);
  }
}
