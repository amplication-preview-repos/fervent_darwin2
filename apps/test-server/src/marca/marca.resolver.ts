import * as graphql from "@nestjs/graphql";
import { MarcaResolverBase } from "./base/marca.resolver.base";
import { Marca } from "./base/Marca";
import { MarcaService } from "./marca.service";

@graphql.Resolver(() => Marca)
export class MarcaResolver extends MarcaResolverBase {
  constructor(protected readonly service: MarcaService) {
    super(service);
  }
}
