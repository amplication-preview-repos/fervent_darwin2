import { ProdutoUpdateManyWithoutMarcasInput } from "./ProdutoUpdateManyWithoutMarcasInput";

export type MarcaUpdateInput = {
  descricao?: string | null;
  nome?: string | null;
  produtos?: ProdutoUpdateManyWithoutMarcasInput;
};
