import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input, Textarea} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import {ProfileResponseType} from '../ProfileAPIClassComponent';
import style from '../../common/FormsControls/FormsControls.module.css';




export type ProfileFormDataType = {
    fullName:string
    lookingForAJob:boolean
    lookingForAJobDescription: string
    aboutMe:string

}

type OwnType = {
    profile: ProfileResponseType
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormDataType, OwnType> & OwnType> = ({handleSubmit, error, initialValues, profile}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><span>Full Name:</span><Field placeholder={'Full Name'} name={'fullName'} type="text" component={Input} validate={[required]}/></div>
                <div><span>Looking For a Job:</span><Field placeholder={'Looking For a Job'} name={'lookingForAJob'} type="checkbox" component={Input} validate={[required]}/></div>
                <div><span>My Professional skills:</span><Field placeholder={'My Professional skills'} name={'lookingForAJobDescription'} component={Textarea} validate={[required]}/></div>
                <div><span>About Me:</span><Field placeholder={'About Me'} name={'aboutMe'} component={Textarea}/></div>
                <div><span>Contacts:</span>
                    {profile && Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        <span>
                            {key}: <Field placeholder={key} name={'contacts.' + key}  component={Input}/>
                        </span>
                    </div>
                })}
                </div>
                <div><button>Save</button></div>
                {error && <div className={style.formSummaryError}>{error}</div>}
            </form>
        </div>
    );
};
export const ProfileDataFormReduxForm = reduxForm<ProfileFormDataType, OwnType>({form: 'edit-profile'})(ProfileDataForm)
