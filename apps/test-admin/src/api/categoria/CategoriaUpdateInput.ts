import { ProdutoUpdateManyWithoutCategoriasInput } from "./ProdutoUpdateManyWithoutCategoriasInput";

export type CategoriaUpdateInput = {
  descricao?: string | null;
  nome?: string | null;
  produtos?: ProdutoUpdateManyWithoutCategoriasInput;
};
