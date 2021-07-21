import React, {useEffect, useState} from "react";


const ProfileStatusWhisHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status);
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    }

    return (
        <div>
            {!editMode &&
            <div>
                    <b>Status:</b><span
                        onDoubleClick={activateEditMode}
                    > {props.status || '--'} </span>
            </div>
            }
            {editMode &&
            <div>
                <input onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       autoFocus={true}
                       value={status}
                       type="text"/>
            </div>
            }
        </div>
    );
}


export default ProfileStatusWhisHooks;
