let rerenderEntireTree = () => {
    console.log('поменялось')
}

let state = {
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
}
export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};
export let updateTextPost = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

};
export const addMessage = () => {

    let newMessages = {
        id: 3,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessages);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree();
};
export const updateTextMessage = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree();

};
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};


export default state;
