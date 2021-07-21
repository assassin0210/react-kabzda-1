import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWhisHooks from "./ProfileStatusWhisHooks";
import userNot from "../../../img/userNot.png";
import Profile from "../Profile";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>

    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(()=>{
            setEditMode(false)
        })


    }
    return (

        <div>
            <div className={s.box_img}></div>
            <div className={s.discription_block}>
                <img className={s.photo} src={profile.photos.large || userNot}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}


                {editMode ? <ProfileDataForm
                        initialValues={profile}
                        profile={profile}
                        onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}

                <ProfileStatusWhisHooks
                    updateStatus={updateStatus}
                    status={status}/>
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}> Edit</button>
        </div>}
        <div>
            <b>Full name</b> : {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
            return <Contact
                ket={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
            />
        })}
        </div>
    </div>

}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
