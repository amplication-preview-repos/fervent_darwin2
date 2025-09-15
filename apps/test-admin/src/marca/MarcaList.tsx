import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MarcaList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Marcas"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="descricao" source="descricao" />
        <TextField label="ID" source="id" />
        <TextField label="nome" source="nome" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
