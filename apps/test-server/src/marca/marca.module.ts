import { Module } from "@nestjs/common";
import { MarcaModuleBase } from "./base/marca.module.base";
import { MarcaService } from "./marca.service";
import { MarcaController } from "./marca.controller";
import { MarcaResolver } from "./marca.resolver";

@Module({
  imports: [MarcaModuleBase],
  controllers: [MarcaController],
  providers: [MarcaService, MarcaResolver],
  exports: [MarcaService],
})
export class MarcaModule {}
