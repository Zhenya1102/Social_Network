import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {loginTC} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppRootState} from '../../redux/redux-store';
import style from '../common/FormsControls/FormsControls.module.css'


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const maxLength = maxLengthCreator(30);
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Email'} name={'email'} type="text" component={Input} validate={[required, maxLength]}/></div>
                <div><Field placeholder={'password'} name={'password'} type="password" component={Input} validate={[required, maxLength]}/></div>
                <div><Field type="checkbox" name={'rememberMe'} component={Input} validate={[required, maxLength]}/>remember me</div>
                {props.error && <div className={style.formSummaryError}>{props.error}</div>}
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    loginTC:(email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

export const Login = (props:LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state:AppRootState) => ({isAuth: state.auth.isAuth})
export default connect(mapStateToProps, {loginTC})(Login)



