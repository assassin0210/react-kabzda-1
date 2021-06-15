import React from "react";
import styles from './users.module.css'

const Users = (props) => {

    if (props.users.length===0){
        props.setUsers(
            [
                {id: 1,photoUrl: 'https://image.flaticon.com/icons/png/512/848/848043.png' ,followed :false, fullName: 'Dmitry', status: 'i\'am a boss', location: {city: 'Minsk', country:'Belarus'}},
                {id: 2,photoUrl: 'https://image.flaticon.com/icons/png/512/848/848043.png' ,followed :false, fullName: 'Sasha', status: 'i\'am a boss too', location: {city: 'Moskov', country:'Russia'}},
                {id: 3,photoUrl: 'https://image.flaticon.com/icons/png/512/848/848043.png' ,followed :true, fullName: 'Dana', status: 'Hello, world', location: {city: 'Bender', country:'Transnistria'}},
                {id: 4,photoUrl: 'https://image.flaticon.com/icons/png/512/848/848043.png' ,followed :true, fullName: 'Artem', status: 'Chicago one love', location: {city: 'Chicago', country:'United States'}},

            ]
        )
    }



    return <div>
        {
            props.users.map(u =>
                <div key={u.id}>
                <span>
                    <div> <img src={u.photoUrl} className={styles.userPhoto}/></div>
                    <div>
                        {u.followed ?
                            <button onClick={()=>{props.unfollow(u.id)}}>unfollow</button>:
                            <button onClick={()=>{props.follow(u.id)}}>follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.userStatus}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>)
        }

        </div>

};

export default Users
