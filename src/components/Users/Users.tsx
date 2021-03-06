import React from "react";
import {UsersType} from "../../types/types";
import Paginator from "../Paginator/Paginator";
import User from "./User";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}


export const Users: React.FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
        <Paginator
            onPageChanged={onPageChanged} pageSize={pageSize} totalItemsCount={totalUsersCount}
            currentPage={currentPage}/>
        <div>
            {
                users.map(u =>
                    <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                        key={u.id}
                    />)
            }
        </div>
    </div>
};


