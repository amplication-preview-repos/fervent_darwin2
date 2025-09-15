import { ProdutoCreateNestedManyWithoutCategoriasInput } from "./ProdutoCreateNestedManyWithoutCategoriasInput";

export type CategoriaCreateInput = {
  descricao?: string | null;
  nome?: string | null;
  produtos?: ProdutoCreateNestedManyWithoutCategoriasInput;
};
