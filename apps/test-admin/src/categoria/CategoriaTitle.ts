import { Categoria as TCategoria } from "../api/categoria/Categoria";

export const CATEGORIA_TITLE_FIELD = "nome";

export const CategoriaTitle = (record: TCategoria): string => {
  return record.nome?.toString() || String(record.id);
};
