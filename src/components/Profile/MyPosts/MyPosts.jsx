import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (    
      <div className={s.post}>
        <Post message='Hi, how are you?' likeCount = '13'/>              
        <Post message="It's my first post!" likeCount = '24'/>               
      </div>    
  );
};

export default MyPosts;
