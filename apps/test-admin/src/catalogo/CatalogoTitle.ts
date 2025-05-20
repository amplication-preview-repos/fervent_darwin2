import { Catalogo as TCatalogo } from "../api/catalogo/Catalogo";

export const CATALOGO_TITLE_FIELD = "nome";

export const CatalogoTitle = (record: TCatalogo): string => {
  return record.nome?.toString() || String(record.id);
};
