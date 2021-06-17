import React from "react";
import s from "./Header.module.css";
import {NavLink, Route} from "react-router-dom";

const Header = (props) => {
  return (<header className={s.header}>
      <div className={s.box_img}>
        <img src="https://image.flaticon.com/icons/png/512/809/809154.png"/>
        <div className={s.box_text}>
          <span className={s.first_b_logo}>B</span>
          <p className={s.secant_b_logo}>booK</p>
        </div>
      </div>
        <div className={s.loginBlock}>
            {props.isAuth? props.login  :<NavLink to={'/login'}> Login </NavLink> }
        </div>
    </header>
  );
};

export default Header;
