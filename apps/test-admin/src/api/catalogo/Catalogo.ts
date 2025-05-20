import { Produto } from "../produto/Produto";

export type Catalogo = {
  createdAt: Date;
  descricao: string | null;
  id: string;
  nome: string | null;
  produtos?: Array<Produto>;
  updatedAt: Date;
};
