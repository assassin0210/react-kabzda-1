import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";

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
          ava + discription
      </div>
    </div>
  );
};

export default ProfileInfo;
