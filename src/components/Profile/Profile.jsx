import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "../Dialogs/Message/Message";


const Profile = (props) => {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateTextPost={props.updateTextPost}
                posts={props.profilePage.posts}
            />
            <DialogItem/>
            <Message/>
        </div>
    );
};

export default Profile;

