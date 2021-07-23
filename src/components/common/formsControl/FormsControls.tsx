import React, { FC} from "react";
import s from './FormsControls.module.css'
import {Field, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validators/validators";


const FormControl: FC<WrappedFieldProps> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}


export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl{...props}><textarea {...input} {...restProps}></textarea></FormControl>
    );
};

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl{...props}><input {...input} {...restProps}></input></FormControl>
    );
};






export function createField<FormKeysType extends string>(placeholder: string | undefined, name: FormKeysType,
                            validators: Array<FieldValidatorType>,
                            component: FC<WrappedFieldProps>,
                            props = {}, text = '') {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}
            />{text}
        </div>)
}




