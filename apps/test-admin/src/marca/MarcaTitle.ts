import { Marca as TMarca } from "../api/marca/Marca";

export const MARCA_TITLE_FIELD = "nome";

export const MarcaTitle = (record: TMarca): string => {
  return record.nome?.toString() || String(record.id);
};
