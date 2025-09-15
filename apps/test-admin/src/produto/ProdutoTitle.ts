import { Produto as TProduto } from "../api/produto/Produto";

export const PRODUTO_TITLE_FIELD = "nome";

export const ProdutoTitle = (record: TProduto): string => {
  return record.nome?.toString() || String(record.id);
};
