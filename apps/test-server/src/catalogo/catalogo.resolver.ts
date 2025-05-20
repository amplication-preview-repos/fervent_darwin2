import * as graphql from "@nestjs/graphql";
import { CatalogoResolverBase } from "./base/catalogo.resolver.base";
import { Catalogo } from "./base/Catalogo";
import { CatalogoService } from "./catalogo.service";

@graphql.Resolver(() => Catalogo)
export class CatalogoResolver extends CatalogoResolverBase {
  constructor(protected readonly service: CatalogoService) {
    super(service);
  }
}
