import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CatalogoTitle } from "../catalogo/CatalogoTitle";
import { CategoriaTitle } from "../categoria/CategoriaTitle";
import { MarcaTitle } from "../marca/MarcaTitle";

export const ProdutoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="ativo" source="ativo" />
        <ReferenceInput
          source="catalogo.id"
          reference="Catalogo"
          label="Catalogo"
        >
          <SelectInput optionText={CatalogoTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="categoria.id"
          reference="Categoria"
          label="Categoria"
        >
          <SelectInput optionText={CategoriaTitle} />
        </ReferenceInput>
        <TextInput label="descricao" multiline source="descricao" />
        <ReferenceInput source="marca.id" reference="Marca" label="Marca">
          <SelectInput optionText={MarcaTitle} />
        </ReferenceInput>
        <TextInput label="nome" source="nome" />
        <NumberInput label="preco" source="preco" />
        <NumberInput
          step={1}
          label="quantidadeEstoque"
          source="quantidadeEstoque"
        />
      </SimpleForm>
    </Create>
  );
};
