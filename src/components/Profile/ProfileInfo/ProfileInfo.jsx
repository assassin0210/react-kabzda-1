import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.box_img}></div>
      <div className={s.discription_block}>
          ava + discription
      </div>
    </div>
  );
};

export default ProfileInfo;
