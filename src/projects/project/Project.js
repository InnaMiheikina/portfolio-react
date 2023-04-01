import React from 'react';
import style from './Project.module.scss'

const Project = (props) => {
    return (
        <a href={'/'}  target={'_blank'} className={style.project}>
           <div className={style.imgProjectContainer}>
               <div className={style.imgProject} style={props.style}>
               </div>
           </div>
            <div className={style.details}>
                <span className={style.category}>tsx< /span>
                <div className={style.projectTitle}>{props.title}</div>
           <img className={style.svg} src="https://tonni-react.vercel.app/img/svg/vector5.svg" alt="" />
            </div>
        </a>
    );
};

export default Project;