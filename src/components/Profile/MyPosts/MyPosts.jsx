import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControl/FormsControls";

const maxLength10 = maxLengthCreator(10)


const MyPosts = React.memo(props => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} id={p.id}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>

            <div className={s.post}>
                {postsElements}
            </div>
        </div>


    );

});


let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name='newPostText'
                validate={[required, maxLength10]}
                placeholder='Enter your post'/>
            <button>Add post</button>
        </form>)
};


let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
