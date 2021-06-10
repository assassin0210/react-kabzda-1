import React from 'react';
import s from "./FriendsItem.module.css";
import {NavLink} from "react-router-dom";


const FriendsItem = (props) => {
    return (
            <div className={s.friendsItemBox}>
                <div className={s.avatar}>{props.avatar}</div>
                <div className={s.name}>{props.name}</div>

            </div>

    );
};


export default FriendsItem;

