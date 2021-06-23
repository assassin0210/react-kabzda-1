import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem avatar={d.avatar} key={d.id} name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message key={m.id} message={m.message}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }


    if (!props.isAuth) return <Redirect to={'/login'}/>;


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>
                    <div>{messagesElement}</div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>


            </div>
        </div>

    );

};

const maxLength50= maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required,maxLength50]}
                    component={Textarea}
                    name='newMessageBody'
                    placehopder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);


export default Dialogs;
