import { Produto } from "../produto/Produto";

export type Categoria = {
  createdAt: Date;
  descricao: string | null;
  id: string;
  nome: string | null;
  produtos?: Array<Produto>;
  updatedAt: Date;
};
