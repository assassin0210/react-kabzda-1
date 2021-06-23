import React from 'react';


const Messages = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <div >
                <div>  {props.message}</div>
            </div>
        </div>

    );
};

export default Messages
