import { CatalogoWhereUniqueInput } from "../catalogo/CatalogoWhereUniqueInput";
import { CategoriaWhereUniqueInput } from "../categoria/CategoriaWhereUniqueInput";
import { MarcaWhereUniqueInput } from "../marca/MarcaWhereUniqueInput";

export type ProdutoCreateInput = {
  ativo?: boolean | null;
  catalogo?: CatalogoWhereUniqueInput | null;
  categoria?: CategoriaWhereUniqueInput | null;
  descricao?: string | null;
  marca?: MarcaWhereUniqueInput | null;
  nome?: string | null;
  preco?: number | null;
  quantidadeEstoque?: number | null;
};
