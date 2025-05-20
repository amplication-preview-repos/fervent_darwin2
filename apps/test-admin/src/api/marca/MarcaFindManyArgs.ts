import { MarcaWhereInput } from "./MarcaWhereInput";
import { MarcaOrderByInput } from "./MarcaOrderByInput";

export type MarcaFindManyArgs = {
  where?: MarcaWhereInput;
  orderBy?: Array<MarcaOrderByInput>;
  skip?: number;
  take?: number;
};
