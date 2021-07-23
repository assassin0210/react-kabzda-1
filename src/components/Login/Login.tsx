import React, {FC} from "react";
import {createField, Input} from "../common/formsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../common/formsControl/FormsControls.module.css'
import { InjectedFormProps, reduxForm} from "redux-form";
import {AppStateType} from "../../Redux/redux-store";
type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (<form onSubmit={handleSubmit}>

            {createField<LoginFormValuesTypeKeys>("Email", "email", [required,], Input)}
            {createField<LoginFormValuesTypeKeys>('password', 'password', [required,], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember Me')}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input, {})}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>

                <button>login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean

}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void

}

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string

}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login: FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {

        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
