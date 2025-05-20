import { SortOrder } from "../../util/SortOrder";

export type ProdutoOrderByInput = {
  ativo?: SortOrder;
  catalogoId?: SortOrder;
  categoriaId?: SortOrder;
  createdAt?: SortOrder;
  descricao?: SortOrder;
  id?: SortOrder;
  marcaId?: SortOrder;
  nome?: SortOrder;
  preco?: SortOrder;
  quantidadeEstoque?: SortOrder;
  updatedAt?: SortOrder;
};
