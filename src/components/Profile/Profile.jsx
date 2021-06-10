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
            <MyPosts posts={props.state.posts} />
            <DialogItem />
            <Message/>
        </div>
    );
};

export default Profile;

