import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarcaServiceBase } from "./base/marca.service.base";

@Injectable()
export class MarcaService extends MarcaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
