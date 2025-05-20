import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProdutoTitle } from "../produto/ProdutoTitle";

export const CatalogoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="descricao" multiline source="descricao" />
        <TextInput label="nome" source="nome" />
        <ReferenceArrayInput source="produtos" reference="Produto">
          <SelectArrayInput
            optionText={ProdutoTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
