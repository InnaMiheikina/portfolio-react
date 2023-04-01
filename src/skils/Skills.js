import React from 'react'
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import Fade from "react-reveal/Fade";


const Skills = () => {
    return (
        <Fade>
        <div  id={'skills'} className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title title={'Skills'} />
                <div className={style.skills}>
                    <Skill title={"HTML/CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Skill title={"JavaScript/TypeScript"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Skill title={"React/React-Redux"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Skill title={"STORYBOOK"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                </div>
            </div>
        </div>
            </Fade>
    );
};

export default Skills;