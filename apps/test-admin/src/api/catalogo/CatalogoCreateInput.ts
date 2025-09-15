import { ProdutoCreateNestedManyWithoutCatalogosInput } from "./ProdutoCreateNestedManyWithoutCatalogosInput";

export type CatalogoCreateInput = {
  descricao?: string | null;
  nome?: string | null;
  produtos?: ProdutoCreateNestedManyWithoutCatalogosInput;
};
