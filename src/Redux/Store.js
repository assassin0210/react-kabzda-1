import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: 'It\'s my first post!', likeCount: 25},
            ],
            newPostText: 'it-kamasutra.com',


        },
        dialogsPage: {
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
            newMessageBody: 'Привет, друг ',
        },
        sideBar: {
            friends: [
                {name: 'Iarik', avatar: <img src="https://image.flaticon.com/icons/png/128/146/146037.png" alt=""/>},
                {name: 'Masha', avatar: <img src="https://image.flaticon.com/icons/png/128/146/146036.png" alt=""/>},
                {name: 'Aurika', avatar: <img src="https://image.flaticon.com/icons/png/128/146/146034.png" alt=""/>}


            ]
        },
    },


    _callSubscriber() {
        console.log('поменялось')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state);

    }
}








export default store;
window.store = store;
