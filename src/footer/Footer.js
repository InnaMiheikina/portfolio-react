import React from 'react';
import style from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <h3>Inna Mikheikina</h3>
                <div className={style.block}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span>все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;