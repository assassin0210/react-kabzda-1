import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.box_img}></div>
      <div>ava + discription</div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Add post</button>
      <MyPosts />
    </div>
  );
};

export default Profile;
