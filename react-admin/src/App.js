import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import { Component } from 'react';
import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider";
import { StudentEdit, StudentList, StudentCreate } from "./Student";

// TODO: replace with graphql provider - resolve webpack issue
class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }

  componentDidMount() {
    // const options = {
    //   clientOptions: {
    //     uri: 'http://localhost:9999'
    //   },
    // };
    // buildGraphQLProvider(options)
    //   .then(dataProvider => this.setState({ dataProvider }));
  }
  render () {
    // const { dataProvider } = this.state;
    // TODO: replace with graphql provider
    const dataProvider = jsonServerProvider("http://localhost:9998")
    if (!dataProvider) return <div>Loading</div>;

    return (
      <Admin 
        dashboard={Dashboard}
        authProvider={authProvider} 
        dataProvider={dataProvider}>
        <Resource name="Student" 
          icon={UserIcon}
          list={StudentList} 
          edit={StudentEdit} 
          create={StudentCreate}
          />
      </Admin>
    );
  }
}

export default App;