import React from "react";
import profileReducer, {addPostActionCreator} from "./profile-reducer";


profileReducer({}, {});




it('new post should be added', () => {
    let action = addPostActionCreator('Sasha');
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 12},
            {id: 2, message: 'It\'s my first post!', likeCount: 25},
        ],
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});
