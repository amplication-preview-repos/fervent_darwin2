import { Module } from "@nestjs/common";
import { CatalogoModuleBase } from "./base/catalogo.module.base";
import { CatalogoService } from "./catalogo.service";
import { CatalogoController } from "./catalogo.controller";
import { CatalogoResolver } from "./catalogo.resolver";

@Module({
  imports: [CatalogoModuleBase],
  controllers: [CatalogoController],
  providers: [CatalogoService, CatalogoResolver],
  exports: [CatalogoService],
})
export class CatalogoModule {}
