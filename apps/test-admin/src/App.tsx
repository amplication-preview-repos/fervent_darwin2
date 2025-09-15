import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CategoriaList } from "./categoria/CategoriaList";
import { CategoriaCreate } from "./categoria/CategoriaCreate";
import { CategoriaEdit } from "./categoria/CategoriaEdit";
import { CategoriaShow } from "./categoria/CategoriaShow";
import { CatalogoList } from "./catalogo/CatalogoList";
import { CatalogoCreate } from "./catalogo/CatalogoCreate";
import { CatalogoEdit } from "./catalogo/CatalogoEdit";
import { CatalogoShow } from "./catalogo/CatalogoShow";
import { ProdutoList } from "./produto/ProdutoList";
import { ProdutoCreate } from "./produto/ProdutoCreate";
import { ProdutoEdit } from "./produto/ProdutoEdit";
import { ProdutoShow } from "./produto/ProdutoShow";
import { MarcaList } from "./marca/MarcaList";
import { MarcaCreate } from "./marca/MarcaCreate";
import { MarcaEdit } from "./marca/MarcaEdit";
import { MarcaShow } from "./marca/MarcaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"test"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Categoria"
          list={CategoriaList}
          edit={CategoriaEdit}
          create={CategoriaCreate}
          show={CategoriaShow}
        />
        <Resource
          name="Catalogo"
          list={CatalogoList}
          edit={CatalogoEdit}
          create={CatalogoCreate}
          show={CatalogoShow}
        />
        <Resource
          name="Produto"
          list={ProdutoList}
          edit={ProdutoEdit}
          create={ProdutoCreate}
          show={ProdutoShow}
        />
        <Resource
          name="Marca"
          list={MarcaList}
          edit={MarcaEdit}
          create={MarcaCreate}
          show={MarcaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
