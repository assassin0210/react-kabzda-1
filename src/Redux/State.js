let store ={
    _state:{
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
                {id: 2, name: 'Sveta', avatar: <img src="https://image.flaticon.com/icons/png/128/145/145846.png" alt=""/>},
                {
                    id: 3,
                    name: 'Daniela',
                    avatar: <img src="https://image.flaticon.com/icons/png/128/145/145847.png" alt=""/>
                },
                {id: 4, name: 'Sasha', avatar: <img src="https://image.flaticon.com/icons/png/128/145/145844.png" alt=""/>},
                {id: 5, name: 'Igor', avatar: <img src="https://image.flaticon.com/icons/png/128/145/145845.png" alt=""/>},
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
            newMessageText: 'Привет, друг ',
        },
        sideBar: {
            friends: [
                {name: 'Iarik', avatar: <img src="https://image.flaticon.com/icons/png/128/146/146037.png" alt=""/>},
                {name: 'Masha', avatar: <img src="https://image.flaticon.com/icons/png/128/146/146036.png" alt=""/>},
                {name: 'Aurika', avatar: <img src="https://image.flaticon.com/icons/png/128/146/146034.png" alt=""/>}


            ]
        },
    },
    getState(){
        return this._state;
    },
    _callSubscriber () {console.log('поменялось')},

    addPost  ()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateTextPost  (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);

    },
    updateTextMessage  (newText)  {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber();

    },
    addMessage  ()  {
        let newMessages = {
            id: 3,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessages);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber();
    },
    subscribe  (observer)  {
        this._callSubscriber = observer;
    },

}


export default store;
window.store = store;
