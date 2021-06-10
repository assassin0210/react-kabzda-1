import React from 'react';
import s from "./Friends.module.css";
import {NavLink} from "react-router-dom";
import FriendsItem from "./FriendsItem/FriendsItem";
import Navbar from "../Navbar";


const Friends = (props) => {

    let friendsElements = props.state.friends.map(d => <FriendsItem avatar={d.avatar} name={d.name}/>);
    return (<div>
            <div className={s.friendsElements}>
                {friendsElements}
            </div>
        </div>

    );
};


export default Friends;

