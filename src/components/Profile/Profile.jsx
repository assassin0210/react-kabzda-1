import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Profile = (props) => {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
            <DialogItem/>
        </div>
    );
};

export default Profile;

