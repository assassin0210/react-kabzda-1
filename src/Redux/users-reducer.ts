import {UsersType} from "../types/types";
import {updateObjectInArray} from "../utils/object-helper";
import { BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";

import {userAPI, userAPI as usersAPI} from "../API/user-api";



let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<Number>,
};

type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes>


export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {


    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case "SET_USERS":
            return {...state, users: action.users}

        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.count}
        case 'TOGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGLE_IS_FOLLOWING_PROGRES':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }


        default :
            return state;

    }
};

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions ={
     followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),

     unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId}as const),

     setUsers : (users: Array<UsersType>) => ({type: 'SET_USERS', users}as const),

     setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage }as const),

     setUsersTotalCount: (totalUsersCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        count: totalUsersCount
    }as const),

     setIsFetching : (isFetching: boolean)  => ({type: 'TOGLE_IS_FETCHING', isFetching}as const),

    toggleFollowingProgress : (isFetching: boolean, userId: number) => ({
        type: 'TOGLE_IS_FOLLOWING_PROGRES',
        isFetching,
        userId
    }as const),


}






export const requestUsers = (page: number, pageSize: number) : ThunkType=> {
    return async (dispatch , getState ) => {
        dispatch(actions.setIsFetching(true));
        dispatch(actions.setCurrentPage(page))
        let data = await userAPI.getUsers(page, pageSize)
        dispatch(actions.setIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setUsersTotalCount(data.totalCount));
    }
}


const followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any, actionCreator: (userId:number)=> ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) : ThunkType=> {
    return async (dispatch, getState) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), actions.followSuccess);
    };
}
export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), actions.unfollowSuccess);
    }
}



