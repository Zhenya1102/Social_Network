import React, {FC, InputHTMLAttributes, TextareaHTMLAttributes} from 'react';
import style from './FormsControls.module.css'

type FormControlProps<T> = {
    input: T;
    meta: {
        touched: boolean;
        error: string;
    };
    children: React.ReactNode;
};


export const FormControl: FC<FormControlProps<any>> = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
type TextareaProps = FormControlProps<TextareaHTMLAttributes<HTMLTextAreaElement>>;

export const Textarea: FC<TextareaProps> = (props) => {
    const {input, meta} = props
    return <FormControl {...props}><textarea {...input} {...props}/></FormControl>
}
type InputProps = FormControlProps<InputHTMLAttributes<HTMLInputElement>>;

export const Input: FC<InputProps> = (props) => {
    const {input, meta} = props
    return <FormControl {...props}><input {...input} {...props}/></FormControl>
}


