import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const maxLength = maxLengthCreator(30);
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Login'} name={'login'} type="text" component={Input} validate={[required, maxLength]}/></div>
                <div><Field placeholder={'password'} name={'password'} type="password" component={Input} validate={[required, maxLength]}/></div>
                <div><Field type="checkbox" name={'rememberMe'} component={Input} validate={[required, maxLength]}/>remember me</div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};





