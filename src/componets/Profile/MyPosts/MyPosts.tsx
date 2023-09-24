import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/store';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';


type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (newPostText: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    const onAddPost = (formData: FormDataType) => {
        if (formData.newPostText.trim() !== '') {
            props.addPost(formData.newPostText)
        }
    }
    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

type FormDataType = {
    newPostText: string
}

const maxLength = maxLengthCreator(30);

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="newPostText"
                    placeholder="New Post"
                    validate={[required, maxLength]}
                >
                </Field>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'profileAddNewPostForm:'})(AddNewPostForm)