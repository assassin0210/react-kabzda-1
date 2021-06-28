import React from "react";

import {createField, Input} from "../common/formsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../common/formsControl/FormsControls.module.css'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return(  <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    validate={[required,]}
                    name={'email'}
                    component={Input}/>
            </div>
            <div>
                <Field
                    placeholder={'password'}
                    validate={[required,]}
                    name={'password'}
                    type={'password'}
                    component={Input}/>

            </div>
            <div>
                <Field
                    type={'checkbox'}
                    validate={[required,]}
                    name={'rememberMe'}
                    component={Input}/>
                    <span>Remember Me</span>
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {

        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
