import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CatalogoService } from "./catalogo.service";
import { CatalogoControllerBase } from "./base/catalogo.controller.base";

@swagger.ApiTags("catalogos")
@common.Controller("catalogos")
export class CatalogoController extends CatalogoControllerBase {
  constructor(protected readonly service: CatalogoService) {
    super(service);
  }
}
