import React from 'react';
import style from './Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

const Menu = () => {
    return (
        <div className={style.menu} id={'menu'}>
            <div className={style.anchor_nav}>
                <Link
                    className={style.title}
                    activeClass={style.active}
                    to="menu"
                    smooth={true}
                    offset={1}
                    direction={500}
                >Home</Link>
                <Link
                    className={style.title}
                    activeClass={style.active}
                    to={'skills'}
                    smooth={true}
                    offset={1}
                    direction={500}
                >Skills</Link>
                <Link
                    className={style.title}
                    activeClass={style.active}
                    to={'projects'}
                    smooth={true}
                    offset={1}
                    direction={500}
                >Projects</Link>
                <Link
                    className={style.title}
                    activeClass={style.active}
                    to={'contacts'}
                    smooth={true}
                    offset={1}
                    direction={500}
                >Contacts</Link>
            </div>
        </div>

    );
}

export default Menu;