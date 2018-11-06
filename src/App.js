// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import DeptIcon from '@material-ui/icons/Work';
import UserIcon from '@material-ui/icons/Group';
import StarIcon from '@material-ui/icons/Star';

import englishMessages from 'ra-language-english';
import chineseMessages from 'ra-language-chinese';

import authProvider from './authProvider';
import {EmployeeList, EmployeeCreate, EmployeeEdit} from "./employee";
import {DeptList, DeptCreate, DeptEdit} from "./department";
import {PosiList, PosiCreate, PosiEdit} from "./position";
import MyLogin from "./MyLogin";
import * as fetchUtils from "ra-core/esm/util/fetch";

//import dataProvider from './dataProvider';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// const App = () => (
//     <Admin dashboard={Dashboard} dataProvider={dataProvider}  authProvider={authProvider}>
//         <Resource name="posts" list={PostList}  edit={PostEdit} create={PostCreate}  icon={PostIcon} />
//         <Resource name="users" list={UserList}  icon={UserIcon}/>
//     </Admin>
// );

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// const App = () => (
//     <Admin dataProvider={dataProvider}>
//         <Resource name="posts"  list={PostList}/>
//     </Admin>
// );

const messages = {
    zh: chineseMessages,
    en: englishMessages,
}
const i18nProvider = locale => messages[locale];


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `${token}`);
    return fetchUtils.fetchJson(url, options);
}
const dataProvider = jsonServerProvider('/api', httpClient);

//const uploadCapableDataProvider = addUploadFeature(dataProvider);

const App = () => (
    <Admin locale="zh" i18nProvider={i18nProvider} title="我是通信兵-数据管理系统" dataProvider={dataProvider} loginPage={MyLogin}  authProvider={authProvider}>
        <Resource options={{ label: '人员信息' }} name="empl" list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit} icon={UserIcon}  />
        <Resource options={{ label: '单位信息' }} name="dept" list={DeptList} create={DeptCreate} edit={DeptEdit} icon={DeptIcon}/>
        <Resource options={{ label: '人员类别' }} name="posi" list={PosiList} create={PosiCreate} edit={PosiEdit} icon={StarIcon} />
    </Admin>
);

export default App;
