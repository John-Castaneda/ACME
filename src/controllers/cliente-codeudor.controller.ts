import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Cliente,
  Codeudor,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteCodeudorController {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/codeudor', {
    responses: {
      '200': {
        description: 'Codeudor belonging to Cliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Codeudor)},
          },
        },
      },
    },
  })
  async getCodeudor(
    @param.path.string('id') id: typeof Cliente.prototype.id,
  ): Promise<Codeudor> {
    return this.clienteRepository.codeudor(id);
  }
}
