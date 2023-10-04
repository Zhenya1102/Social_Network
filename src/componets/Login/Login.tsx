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
    captcha:string | null
}

type CaptchaPropsType = {
    captchaUrl:string | null
}

const maxLength = maxLengthCreator(30);

export const LoginForm: React.FC<InjectedFormProps<FormDataType, CaptchaPropsType> & CaptchaPropsType> = ({handleSubmit, error,captchaUrl}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><Field placeholder={'Email'} name={'email'} type="text" component={Input}
                            validate={[required, maxLength]}/></div>
                <div><Field placeholder={'Password'} name={'password'} type="password" component={Input}
                            validate={[required, maxLength]}/></div>
                <div><Field type="checkbox" name={'rememberMe'} component={Input} validate={[required]}/><span>remember
                    me</span>
                </div>
                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && <div><Field placeholder={'symbols from image'} name={'captcha'} type="text" component={Input} validate={[required]}/></div>}
                {error && <div className={style.formSummaryError}>{error}</div>}
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType, CaptchaPropsType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    isAuth: boolean
    captchaUrl: string | null
}

export const Login:React.FC<LoginPropsType> = ({loginTC, isAuth,captchaUrl}) => {
    const onSubmit = (formData: FormDataType) => {
        loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={style.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    );
};
const mapStateToProps = (state: AppRootState) => (
    {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
)
export default connect(mapStateToProps, {loginTC})(Login)



