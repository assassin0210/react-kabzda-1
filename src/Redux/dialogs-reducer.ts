const SEND_MESSAGE = 'SEND_MESSAGE';


type DialogType = {
    id: number
    name: string
    avatar: string
}

type MessagesType = {
    id: number
    message: string

}

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Andrey',
            avatar: "https://image.flaticon.com/icons/png/128/145/145843.png"
        },
        {
            id: 2,
            name: 'Sveta',
            avatar: "https://image.flaticon.com/icons/png/128/145/145846.png"
        },
        {
            id: 3,
            name: 'Daniela',
            avatar: "https://image.flaticon.com/icons/png/128/145/145847.png"
        },
        {
            id: 4,
            name: 'Sasha',
            avatar: "https://image.flaticon.com/icons/png/128/145/145844.png"
        },
        {
            id: 5,
            name: 'Igor',
            avatar: "https://image.flaticon.com/icons/png/128/145/145845.png"
        },
        {
            id: 6,
            name: 'Nastya',
            avatar: "https://image.flaticon.com/icons/png/128/3048/3048163.png"
        },
        {
            id: 7,
            name: 'Kolya',
            avatar: "https://image.flaticon.com/icons/png/128/3048/3048228.png"
        },
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hello, how are you?'},
        {id: 2, message: 'I\'m good.I\'m studying to be a programmer!!'},
    ] as Array<MessagesType>,
};

export type InitialStateType = typeof initialState


const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 3, message: body}],
            };
        default:
            return state;
    }
};

type SendMessageCreatorActionType={
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string):SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
