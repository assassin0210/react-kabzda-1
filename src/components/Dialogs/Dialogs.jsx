import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import App from "../../App";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef()

    let addMessage = ()=>{
        let message = newMessageElement.current.value;
        alert(message);
    }

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages} >
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea ref={newMessageElement} cols="30" rows="5"></textarea>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>
        </div>

    );

};
export default Dialogs
