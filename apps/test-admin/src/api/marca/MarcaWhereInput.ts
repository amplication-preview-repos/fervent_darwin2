import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProdutoListRelationFilter } from "../produto/ProdutoListRelationFilter";

export type MarcaWhereInput = {
  descricao?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  produtos?: ProdutoListRelationFilter;
};
