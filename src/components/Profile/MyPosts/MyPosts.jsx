import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id:1, message :'Hi, how are you?',likeCount : 12},
        {id:2, message :'It\'s my first post!',likeCount:25},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/> )

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
