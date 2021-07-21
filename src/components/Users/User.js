import React from "react";
import s from "./users.module.css";
import userNot from "../../img/userNot.png";
import {NavLink} from "react-router-dom";

const User = ({user,followingInProgress,unfollow,follow}) => {
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/Profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userNot}
                                 className={s.userPhoto}/>
                        </NavLink> </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>unfollow</button>

                            : <button disabled={followingInProgress
                                .some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.userStatus}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
        </div>)

};

export default User
