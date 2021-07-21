import {userAPI as usersAPI, userAPI} from "../API/API";
import { PhotosType, UsersType } from "../types/types";
import {updateObjectInArray} from "../utils/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING'
const TOGLE_IS_FOLLOWING_PROGRES = 'TOGLE_IS_FOLLOWING_PROGRES'




let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<Number>,
};

type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action:any) :InitialStateType => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
               users: updateObjectInArray(state.users, action.userId,"id",{followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,"id",{followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGLE_IS_FOLLOWING_PROGRES:
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

type FollowSuccessActionType={
    type: typeof FOLLOW
    userId:number
}
export const followSuccess = (userId: number):FollowSuccessActionType => ({type: FOLLOW, userId});
type UnfollowSuccessActionType={
    type: typeof UNFOLLOW
    userId:number
}
export const unfollowSuccess = (userId: number):UnfollowSuccessActionType => ({type: UNFOLLOW, userId});
type SetUsersActionType={
    type: typeof SET_USERS
    users:Array<UsersType>
}
export const setUsers = (users:Array<UsersType>):SetUsersActionType => ({type: SET_USERS, users});
type SetCurrentPageActionType={
    type: typeof SET_CURRENT_PAGE
    currentPage:number
}
export const setCurrentPage = (currentPage: number):SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});
type SetUsersTotalCountActionType={
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setUsersTotalCount = (totalUsersCount: number):SetUsersTotalCountActionType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
type SetIsFetchingActionType={
    type: typeof TOGLE_IS_FETCHING
    isFetching: boolean
}
export const setIsFetching = (isFetching:boolean):SetIsFetchingActionType => ({type: TOGLE_IS_FETCHING, isFetching});
type toggleFollowingProgressActionType={
    type: typeof TOGLE_IS_FOLLOWING_PROGRES
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching:boolean, userId: number):toggleFollowingProgressActionType => ({type: TOGLE_IS_FOLLOWING_PROGRES, isFetching, userId});

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch:any) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page))
        let data = await userAPI.getUsers(page, pageSize)
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));


    }
}


const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod :any, actionCreator:any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch:any) => {
        followUnfollowFlow(dispatch, userId,usersAPI.follow.bind(userId) , followSuccess);
    };
}
export const unfollow = (userId: number) => {
    return async (dispatch:any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowSuccess);
    }
}



