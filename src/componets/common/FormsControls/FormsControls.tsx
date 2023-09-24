import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import style from './FormsControls.module.css'

type FormControlProps<T> = {
    input: T;
    meta: {
        touched: boolean;
        error: string;
    };
    children: React.ReactNode;
};


export const FormControl:FC<FormControlProps<any>> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>{props.children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
type TextareaProps = FormControlProps<TextareaHTMLAttributes<HTMLTextAreaElement>>;

export const Textarea: FC<TextareaProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...props}/></FormControl>
}
type InputProps = FormControlProps<InputHTMLAttributes<HTMLInputElement>>;

export const Input: FC<InputProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...props}/></FormControl>
}


