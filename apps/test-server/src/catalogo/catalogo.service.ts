import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CatalogoServiceBase } from "./base/catalogo.service.base";

@Injectable()
export class CatalogoService extends CatalogoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
