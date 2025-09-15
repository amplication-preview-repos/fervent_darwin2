import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarcaService } from "./marca.service";
import { MarcaControllerBase } from "./base/marca.controller.base";

@swagger.ApiTags("marcas")
@common.Controller("marcas")
export class MarcaController extends MarcaControllerBase {
  constructor(protected readonly service: MarcaService) {
    super(service);
  }
}
