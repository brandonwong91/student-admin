import * as React from "react";
import {
    List,
    Create,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateTimeInput,
    DateField,
} from 'react-admin';

const studentFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="Student" reference="students" allowEmpty>
        <SelectInput optionText="firstName" />
    </ReferenceInput>,
];

export const StudentList = props => (
    <List filters={studentFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="firstName"/>
            <TextField source="lastName"/>
            <TextField source="phoneNumber"/>
            <DateField source="recordedDateTime" showTime/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const StudentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="phoneNumber"/>
            <DateTimeInput source="recordedDateTime"/>
        </SimpleForm>
    </Edit>
);

export const StudentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="phoneNumber"/>
            <DateTimeInput source="recordedDateTime"/>
        </SimpleForm>
    </Create>
);