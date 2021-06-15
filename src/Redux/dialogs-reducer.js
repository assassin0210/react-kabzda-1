const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Andrey',
            avatar: <img src="https://image.flaticon.com/icons/png/128/145/145843.png" alt=""/>
        },
        {
            id: 2,
            name: 'Sveta',
            avatar: <img src="https://image.flaticon.com/icons/png/128/145/145846.png" alt=""/>
        },
        {
            id: 3,
            name: 'Daniela',
            avatar: <img src="https://image.flaticon.com/icons/png/128/145/145847.png" alt=""/>
        },
        {
            id: 4,
            name: 'Sasha',
            avatar: <img src="https://image.flaticon.com/icons/png/128/145/145844.png" alt=""/>
        },
        {
            id: 5,
            name: 'Igor',
            avatar: <img src="https://image.flaticon.com/icons/png/128/145/145845.png" alt=""/>
        },
        {
            id: 6,
            name: 'Nastya',
            avatar: <img src="https://image.flaticon.com/icons/png/128/3048/3048163.png" alt=""/>
        },
        {
            id: 7,
            name: 'Kolya',
            avatar: <img src="https://image.flaticon.com/icons/png/128/3048/3048228.png" alt=""/>
        },
    ],
    messages: [
        {id: 1, message: 'Hello, how are you?'},
        {id: 2, message: 'I\'m good.I\'m studying to be a programmer!!'},
    ],
    newMessageBody: '123',
};


const dialogsReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody : action.body,
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody : '',
                messages: [...state.messages,{id: 3, message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;
