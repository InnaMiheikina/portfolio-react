import React from 'react';
import style from './header.module.scss'
import Menu from "../menu/Nav";

const Header = () => {
    return (
        <div className={style.header}>
            <Menu/>
        </div>
    );
};

export default Header;