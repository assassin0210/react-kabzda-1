import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.link}>
            <div className={s.dialog}>
                <NavLink activeClassName={s.active} to={path}>{props.avatar} {props.name}</NavLink>
            </div>
        </div>

    );
};

export default DialogItem
