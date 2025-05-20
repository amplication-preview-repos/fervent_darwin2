import { CatalogoWhereInput } from "./CatalogoWhereInput";
import { CatalogoOrderByInput } from "./CatalogoOrderByInput";

export type CatalogoFindManyArgs = {
  where?: CatalogoWhereInput;
  orderBy?: Array<CatalogoOrderByInput>;
  skip?: number;
  take?: number;
};
