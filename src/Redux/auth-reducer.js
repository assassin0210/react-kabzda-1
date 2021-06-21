import {authAPI} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false,

};

const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default :
            return state;
    }
};

export const setAuthUserData = (userId, email, login,) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const getAuthUserData = () => (dispatch)=>{
    authAPI.me()
        .then(response => {
            if(response.resultCode === 0){
                let {id, email, login}=response.data;
                dispatch(setAuthUserData(id, email, login));
            }

        });
}


export default authReducer;
