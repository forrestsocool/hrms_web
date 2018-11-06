import React from 'react';
import { Toolbar, SaveButton, Responsive, SimpleList, List, Edit, Create, Datagrid, TextField, EditButton, LongTextInput, SimpleForm, TextInput } from 'react-admin';

export const DeptList = (props) => (
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

const DeptCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="保存"
            redirect="/dept"
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

export const DeptCreate = (props) => (
    <Create title={<span>新增单位信息</span>} {...props}>
        <SimpleForm validate={validateDept} toolbar={<DeptCreateToolbar />}>
            <TextInput label="名称" source="name"/>
            <LongTextInput label="描述" source="description" />
        </SimpleForm>
    </Create>
);

const DeptTitle = ({ record }) => {
    return <span>编辑 {record ? `"${record.name}"` : ''}</span>;
};

const validateDept = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = ['名称不能为空'];
    }
    if (!values.description) {
        errors.description = ['描述不能为空'];
    }
    return errors
};
export const DeptEdit = (props) => (
    <Edit title={<DeptTitle />} {...props}>
        <SimpleForm validate={validateDept}>
            <TextInput label="名称" source="name"/>
            <LongTextInput label="描述" source="description" />
        </SimpleForm>
    </Edit>
);