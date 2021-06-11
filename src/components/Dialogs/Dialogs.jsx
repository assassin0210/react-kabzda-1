import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import App from "../../App";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateTextMessage(message);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>

                    <textarea onChange={onMessageChange} ref={newMessageElement}
                              value={props.dialogsPage.newMessageText} cols="30" rows="5"/>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>
        </div>

    );

};
export default Dialogs
