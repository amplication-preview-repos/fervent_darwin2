import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CatalogoWhereUniqueInput } from "../catalogo/CatalogoWhereUniqueInput";
import { CategoriaWhereUniqueInput } from "../categoria/CategoriaWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarcaWhereUniqueInput } from "../marca/MarcaWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProdutoWhereInput = {
  ativo?: BooleanNullableFilter;
  catalogo?: CatalogoWhereUniqueInput;
  categoria?: CategoriaWhereUniqueInput;
  descricao?: StringNullableFilter;
  id?: StringFilter;
  marca?: MarcaWhereUniqueInput;
  nome?: StringNullableFilter;
  preco?: FloatNullableFilter;
  quantidadeEstoque?: IntNullableFilter;
};
