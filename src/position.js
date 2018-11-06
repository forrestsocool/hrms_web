import React from 'react';
import { Toolbar, SaveButton, Responsive, SimpleList,  List, Edit, Create, Datagrid, TextField, EditButton, LongTextInput, SimpleForm, TextInput } from 'react-admin';

export const PosiList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.description}
                    // tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    {/*<TextField source="id" />*/}
                    <TextField label="名称" source="name" />
                    <TextField label="描述" source="description" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const PosiCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="保存"
            redirect="/posi"
            submitOnEnter={true}
        />
        {/*<SaveButton*/}
            {/*label="保存并继续"*/}
            {/*redirect={false}*/}
            {/*submitOnEnter={false}*/}
            {/*variant="flat"*/}
        {/*/>*/}
    </Toolbar>
);


export const PosiCreate = (props) => (
    <Create {...props} title={<span>新增人员类别信息</span>}>
        <SimpleForm validate={validatePos} toolbar={<PosiCreateToolbar />}>
            <TextInput label="名称" source="name"/>
            <LongTextInput label="描述" source="description" />
        </SimpleForm>
    </Create>
);

const PosiTitle = ({ record }) => {
    return <span>人员类别： {record ? `"${record.name}"` : ''}</span>;
};

const validatePos = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = ['名称不能为空'];
    }
    if (!values.description) {
        errors.description = ['描述不能为空'];
    }
    return errors
};
export const PosiEdit = (props) => (
    <Edit title={<PosiTitle />} {...props}>
        <SimpleForm validate={validatePos}>
            <TextInput label="名称" source="name"/>
            <LongTextInput label="描述" source="description" />
        </SimpleForm>
    </Edit>
);