import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink  to='/Profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs' activeClassName={s.active} >Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.active} >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' activeClassName={s.active} >Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings' activeClassName={s.active} >Settings</NavLink>
            </div>
            <div className={s.item + ' ' + s.friends} >
              <div>
                  <NavLink to='/Friends' activeClassName={s.active}>Friends</NavLink>
                  <Friends state ={props.state}/>
              </div>

            </div>
        </nav>
    );
};


export default Navbar;

