import React from 'react';
import { ImageInput, ImageField, Toolbar, SaveButton, TabbedForm, FormTab, DateField , DateInput , Responsive, SimpleList, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, ReferenceInput, SelectInput, TextInput } from 'react-admin';
import EmployeeLinkField from "./EmployeeLinkField";
import UploadImageField from "./UploadImageField";

const EmplFilter = (props) => (
    <Filter {...props}>
        <TextInput label="搜索" source="q" alwaysOn />
        <ReferenceInput label="人员类别" source="pos_id" reference="posi" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="所属单位" source="dept_id" reference="dept" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        {sexInput}
        {nationInput}
        {partyInput}
    </Filter>
);


export const EmployeeList = (props) => (
    <List filters={<EmplFilter />} {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.position.name}
                    tertiaryText={record => record.department.name}
                />
            }
            medium={
                <Datagrid>
                    {/*<TextField source="id" />*/}
                    {/*<ReferenceField label="User" source="userId" reference="users">*/}
                        {/*<TextField source="name" />*/}
                    {/*</ReferenceField>*/}
                    {/*<TextField source="position" />*/}
                    {/*<TextField source="department" />*/}

                    {/*<TextField label="姓名" source="name" />*/}
                    <EmployeeLinkField/>
                    <TextField label="性别" source="sex" />
                    <DateField label="生日" source="birthday" />
                    <TextField label="民族" source="nation" />
                    <TextField label="政治面貌" source="party" />
                    <TextField label="籍贯" source="location" />
                    <DateField label="入伍时间" source="armyday" />
                    <DateField label="调入时间" source="workday" />

                    <ReferenceField label="人员类别" source="pos_id" reference="posi">
                        <TextField source="name" />
                    </ReferenceField>

                    <ReferenceField label="所属单位" source= "dept_id" reference="dept">
                        <TextField source="name" />
                    </ReferenceField>
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const postDefaultValue = { nation: "汉族", party: "中共党员", sex:"男" };
const validateEmploy = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = ['姓名不能为空'];
    }
    if (!values.birthday) {
        errors.birthday = ['出生时间不能为空'];
    }
    if (!values.location) {
        errors.location = ['籍贯不能为空'];
    }

    if (!values.armyday) {
        errors.armyday = ['入伍时间不能为空'];
    }

    if (!values.workday) {
        errors.workday = ['调入时间不能为空'];
    }

    if (!values.pos_id) {
        errors.pos_id = ['人员类别不能为空'];
    }

    if (!values.dept_id) {
        errors.dept_id = ['部门不能为空'];
    }

    return errors
};
const PostCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="保存并返回"
            redirect="/empl"
            submitOnEnter={true}
        />
        <SaveButton
            label="保存并继续"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);




const CreateEmplTitle = ({ record }) => {
    return <span>新增人员</span>;
};
const nationInput =  <SelectInput label="民族" source="nation" choices={[
    { id: '汉族', name: '汉族' },
    { id: '蒙古族', name: '蒙古族' },
    { id: '回族', name: '回族' },
    { id: '藏族', name: '藏族' },
    { id: '维吾尔族', name: '维吾尔族' },
    { id: '苗族', name: '苗族' },
    { id: '彝族', name: '彝族' },
    { id: '壮族', name: '壮族' },
    { id: '布依族', name: '布依族' },
    { id: '朝鲜族', name: '朝鲜族' },
    { id: '满族', name: '满族' },
    { id: '侗族', name: '侗族' },
    { id: '瑶族', name: '瑶族' },
    { id: '白族', name: '白族' },
    { id: '土家族', name: '土家族' },
    { id: '哈尼族', name: '哈尼族' },
    { id: '哈萨克族', name: '哈萨克族' },
    { id: '傣族', name: '傣族' },
    { id: '黎族', name: '黎族' },
    { id: '傈僳族', name: '傈僳族' },
    { id: '佤族', name: '佤族' },
    { id: '畲族', name: '畲族' },
    { id: '拉祜族', name: '拉祜族' },
    { id: '水族', name: '水族' },
    { id: '东乡族', name: '东乡族' },
    { id: '纳西族', name: '纳西族' },
    { id: '景颇族', name: '景颇族' },
    { id: '柯尔克孜族', name: '柯尔克孜族' },
    { id: '土族', name: '土族' },
    { id: '达斡尔族', name: '达斡尔族' },
    { id: '仫佬族', name: '仫佬族' },
    { id: '羌族', name: '羌族' },
    { id: '布朗族', name: '布朗族' },
    { id: '撒拉族', name: '撒拉族' },
    { id: '毛南族', name: '毛南族' },
    { id: '仡佬族', name: '仡佬族' },
    { id: '锡伯族', name: '锡伯族' },
    { id: '阿昌族', name: '阿昌族' },
    { id: '普米族', name: '普米族' },
    { id: '塔吉克族', name: '塔吉克族' },
    { id: '怒族', name: '怒族' },
    { id: '乌兹别克族', name: '乌兹别克族' },
    { id: '俄罗斯族', name: '俄罗斯族' },
    { id: '鄂温克族', name: '鄂温克族' },
    { id: '德昂族', name: '德昂族' },
    { id: '保安族', name: '保安族' },
    { id: '裕固族', name: '裕固族' },
    { id: '京族', name: '京族' },
    { id: '塔塔尔族', name: '塔塔尔族' },
    { id: '独龙族', name: '独龙族' },
    { id: '鄂伦春族', name: '鄂伦春族' },
    { id: '赫哲族', name: '赫哲族' },
    { id: '门巴族', name: '门巴族' },
    { id: '珞巴族', name: '珞巴族' },
    { id: '基诺族', name: '基诺族' },
    { id: '高山族', name: '高山族' },
]} />
const partyInput = <SelectInput label="政治面貌" source="party" choices={[
    { id: '中共党员', name: '中共党员' },
    { id: '中共预备党员', name: '中共预备党员' },
    { id: '共青团员', name: '共青团员' },
    { id: '群众', name: '群众' },
    { id: '民革党员', name: '民革党员' },
    { id: '民盟盟员', name: '民盟盟员' },
    { id: '民建会员', name: '民建会员' },
    { id: '民进会员', name: '民进会员' },
    { id: '农工党党员', name: '农工党党员' },
    { id: '致公党党员', name: '致公党党员' },
    { id: '九三学社社员', name: '九三学社社员' },
    { id: '台盟盟员', name: '台盟盟员' },
    { id: '无党派人士', name: '无党派人士' },
]} />
const sexInput = <SelectInput label="性别" source="sex" choices={[
    { id: '男', name: '男' },
    { id: '女', name: '女' },
]} />

export const EmployeeCreate = (props) => (
    <Create title={<CreateEmplTitle />}{...props}>
        <TabbedForm defaultValue={postDefaultValue} validate={validateEmploy}  toolbar={<PostCreateToolbar />}>
            <FormTab label="基本信息">
                <TextInput label="姓名" source="name" />
                {sexInput}
                <DateInput label="出生年月" source="birthday" />
                {nationInput}
                {partyInput}
                <TextInput label="籍贯" source="location" />
            </FormTab>
            <FormTab label="工作信息">
                <DateInput label="入伍时间" source="armyday"/>
                <DateInput label="调入时间" source="workday"/>

                <ReferenceInput label="人员类别" source="pos_id" reference="posi">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput label="所属单位" source="dept_id" reference="dept">
                    <SelectInput optionText="name" />
                </ReferenceInput>
            </FormTab>
            {/*<FormTab label="照片">*/}
                {/*<ImageInput source="pictures" label="照片：大小要求小于1MB，否则不显示。" multiple={false} maxSize={1048000} accept="image/*" placeholder={<p>将图片拖拽至此或点击上传</p>}>*/}
                    {/*<ImageField source="src" title="title" />*/}
                {/*</ImageInput>*/}
            {/*</FormTab>*/}
        </TabbedForm>
    </Create>
);


const EditEmplTitle = ({ record }) => {
    return <span>更新信息： {record ? `"${record.name}"` : ''}</span>;
};

export const EmployeeEdit = (props) => (
    <Edit  title={<EditEmplTitle />} {...props}>
        <TabbedForm validate={validateEmploy}>
            <FormTab label="基本信息">
                <TextInput label="姓名" source="name" />
                {sexInput}
                <DateInput label="出生年月" source="birthday" />
                {nationInput}
                {partyInput}
                <TextInput label="籍贯" source="location" />
            </FormTab>

            <FormTab label="工作信息">
                <DateInput label="入伍时间" source="armyday"/>
                <DateInput label="调入时间" source="workday"/>
                <ReferenceInput label="人员类别" source="pos_id" reference="posi">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput label="所属单位" source="dept_id" reference="dept">
                    <SelectInput optionText="name" />
                </ReferenceInput>
            </FormTab>
            <FormTab label="照片">
                <UploadImageField/>
            </FormTab>
        </TabbedForm>
    </Edit>
);