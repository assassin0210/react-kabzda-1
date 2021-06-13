import React from 'react';
import {NavLink} from "react-router-dom";


const Messages = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <div >
                <NavLink  to={path}>{props.message}</NavLink>
            </div>
        </div>

    );
};

export default Messages
