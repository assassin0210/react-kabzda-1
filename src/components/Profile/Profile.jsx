import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
            <DialogItem/>
        </div>
    );
};

export default Profile;

