import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Login'} name={'login'} type="text" component={'input'}/></div>
                <div><Field placeholder={'password'} name={'password'} type="password" component={'input'}/></div>
                <div><Field type="checkbox" name={'rememberMe'} component={'input'}/>remember me</div>
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





