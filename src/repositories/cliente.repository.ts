import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Cliente, ClienteRelations, Solicitud, Codeudor} from '../models';
import {SolicitudRepository} from './solicitud.repository';
import {CodeudorRepository} from './codeudor.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Cliente.prototype.id>;

  public readonly codeudor: BelongsToAccessor<Codeudor, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>, @repository.getter('CodeudorRepository') protected codeudorRepositoryGetter: Getter<CodeudorRepository>,
  ) {
    super(Cliente, dataSource);
    this.codeudor = this.createBelongsToAccessorFor('codeudor', codeudorRepositoryGetter,);
    this.registerInclusionResolver('codeudor', this.codeudor.inclusionResolver);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
  }
}
