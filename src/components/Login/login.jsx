import React from "react";

import {createField, Input} from "../common/formsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../common/formsControl/FormsControls.module.css'
import {Field, reduxForm} from "redux-form";

const LoginForm = ({handleSubmit, error,captchaUrl}) => {
    return(  <form onSubmit={handleSubmit}>

            {createField("Email","email",[required,],Input)}
            {createField('password','password',[required,],Input, {type:'password'})}
            {createField(null,'rememberMe',[],Input, {type:'checkbox'},'Remember Me')}
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField('Symbols from image','captcha',[required],Input, {})}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>

                <button>login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha);
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
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
