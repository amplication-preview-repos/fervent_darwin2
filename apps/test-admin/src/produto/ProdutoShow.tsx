import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";

import { CATALOGO_TITLE_FIELD } from "../catalogo/CatalogoTitle";
import { CATEGORIA_TITLE_FIELD } from "../categoria/CategoriaTitle";
import { MARCA_TITLE_FIELD } from "../marca/MarcaTitle";

export const ProdutoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="ativo" source="ativo" />
        <ReferenceField
          label="Catalogo"
          source="catalogo.id"
          reference="Catalogo"
        >
          <TextField source={CATALOGO_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Categoria"
          source="categoria.id"
          reference="Categoria"
        >
          <TextField source={CATEGORIA_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="descricao" source="descricao" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Marca" source="marca.id" reference="Marca">
          <TextField source={MARCA_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="nome" source="nome" />
        <TextField label="preco" source="preco" />
        <TextField label="quantidadeEstoque" source="quantidadeEstoque" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
