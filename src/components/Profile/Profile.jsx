import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {


    return (
        <div className={s.content}>
            <ProfileInfo
                status={props.status}
                updateStatus={props.updateStatus}
                profile={props.profile}/>
            <MyPostsContainer/>
            <DialogItem/>
        </div>
    );
};

export default Profile;

