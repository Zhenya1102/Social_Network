import {maxLengthCreator, required} from '../../../utils/validators/validators';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormsControls/FormsControls';

export type MessageFormDataType = {
    newMessageBody: string
}

const maxLength = maxLengthCreator(30);

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="newMessageBody"
                    placeholder="Enter your message"
                    validate={[required, maxLength]}
                >
                </Field>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

export default reduxForm<MessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)