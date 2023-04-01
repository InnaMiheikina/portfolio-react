import React from 'react';
import style from './Contacts.module.scss'
import arrow from "../common/svg/arrow.svg"
import facebook from '../common/svg/facebook-svgrepo-com.png'
import insta from '../common/svg/instagram-167-svgrepo-com.png'
import telega from '../common/svg/telegram-svgrepo-com.png'

const Contacts = () => {
    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <div>
                    <h3 className={style.title}>{'I Want To Hear From You Please Contact Me!'}</h3>
                </div>
                <div className={style.visibility}>
                    <div className={style.n}>
                        <div>
                            <span>
                              <a href={'mailto:innamiheikina93@gmail.com'}
                                 className={style.left}>innamiheikina93@gmail.com</a>
                                 </span>
                        </div>
                        <img src={arrow} alt={""} className={style.svg}/>
                    </div>
                    <div className={style.socialIcons}>
                        <div className={style.socialIcon}>
                            <a href={'https://m.facebook.com/innulichka.ekimenko?eav=AfbNrl3huNDRGCZU-FBiW1sLWirMlUsCzzbO32L1lZbZy4Cy7JH-b8NmzrY7K9dJga0&paipv=0'}><img src={facebook} alt=""/></a>
                        </div>
                        <div className={style.socialIcon}>
                            <a href={'https://www.instagram.com/inna_mikheikina/'}><img src={insta} alt=""/></a>
                        </div>
                        <div className={style.socialIcon}>
                            <a href={'https://t.me/innamiheikina'}><img src={telega} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;