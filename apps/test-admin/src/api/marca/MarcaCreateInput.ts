import { ProdutoCreateNestedManyWithoutMarcasInput } from "./ProdutoCreateNestedManyWithoutMarcasInput";

export type MarcaCreateInput = {
  descricao?: string | null;
  nome?: string | null;
  produtos?: ProdutoCreateNestedManyWithoutMarcasInput;
};
