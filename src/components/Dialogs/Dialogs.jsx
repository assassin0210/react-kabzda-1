import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);


    let newMessageElement = React.createRef()


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>
                    сообщения одно для всех
                </div>
                <div>

                    <textarea  ref={newMessageElement}
                              value={props.dialogsPage.newMessageText} cols="30" rows="5"/>
                    <button >Add message</button>
                </div>

            </div>
        </div>

    );

};
export default Dialogs
