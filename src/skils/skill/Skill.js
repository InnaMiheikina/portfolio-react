import React from 'react';
import style from './Skill.module.scss'
import Fade from "react-reveal/Fade";

const Skill = (props) => {
    return (
        <Fade top>
         <div className={style.skill}>
           <h4 className={style.title}>{props.title}</h4>
           <span className={style.description}>
               {props.description}
           </span>
       </div>
        </Fade>
    );
};

export default Skill;