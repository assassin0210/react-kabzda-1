import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Daniela'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Igor'},
        {id: 6, name: 'Nastya'},
        {id: 7, name: 'Kolya'},
    ]

    let messages = [
        {id: 1, message: 'Hello, how are you?'},
        {id: 2, message: 'I\'m good.I\'m studying to be a programmer!!'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    );

};
export default Dialogs
