import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider";
import { StudentEdit, StudentList, StudentCreate } from "./Student";

const dataProvider = jsonServerProvider('http://localhost:9998');
const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider} 
    dataProvider={dataProvider}>
    <Resource name="students" 
      icon={UserIcon}
      list={StudentList} 
      edit={StudentEdit} 
      create={StudentCreate}
      />
  </Admin>
);

export default App;