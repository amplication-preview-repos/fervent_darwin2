import { ProdutoUpdateManyWithoutCatalogosInput } from "./ProdutoUpdateManyWithoutCatalogosInput";

export type CatalogoUpdateInput = {
  descricao?: string | null;
  nome?: string | null;
  produtos?: ProdutoUpdateManyWithoutCatalogosInput;
};
