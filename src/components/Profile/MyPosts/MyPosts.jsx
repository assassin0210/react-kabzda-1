import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/> )

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <textarea cols="20" rows="5"></textarea>
            <button>Add post</button>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>


    );
};

export default MyPosts;
