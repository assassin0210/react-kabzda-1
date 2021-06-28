import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWhisHooks from "./ProfileStatusWhisHooks";


const ProfileInfo = (props) => {
    if(!props.profile ){
        return <Preloader/>

    }
  return (
    <div>
      <div className={s.box_img}></div>
      <div className={s.discription_block}>
          <img src={props.profile.photos.large}/>
          <div>{props.profile.contacts.vk}</div>
          <div> {props.profile.lookingForAJobDescription}</div>
          <ProfileStatusWhisHooks
              updateStatus={props.updateStatus}
              status={props.status}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
