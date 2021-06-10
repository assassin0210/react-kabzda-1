import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text);
        newPostElement.current.value = '';
    }
    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <textarea ref={newPostElement} cols="20" rows="5"></textarea>
            <button onClick={addPost}>Add post</button>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>


    );
};

export default MyPosts;
