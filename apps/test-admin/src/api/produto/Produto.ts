import { Catalogo } from "../catalogo/Catalogo";
import { Categoria } from "../categoria/Categoria";
import { Marca } from "../marca/Marca";

export type Produto = {
  ativo: boolean | null;
  catalogo?: Catalogo | null;
  categoria?: Categoria | null;
  createdAt: Date;
  descricao: string | null;
  id: string;
  marca?: Marca | null;
  nome: string | null;
  preco: number | null;
  quantidadeEstoque: number | null;
  updatedAt: Date;
};
