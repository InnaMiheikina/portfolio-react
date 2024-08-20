import React from 'react';
import style from './Projects.module.scss';
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from "./../assets/image/3a4798417da6336830de9f09ee624055.jpg"
import socialImage from "./../assets/image/1667302195_4-celes-club-p-estetichnie-bezhevie-oboi-na-telefon-krasi-4.jpg"
import Fade from "react-reveal/Fade";

const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }
    const todolistToolkit = {
        backgroundImage: `url(${todoImage})`
    }
    const Cards = {
        backgroundImage: `url(${todoImage})`
    }
    const Counter = {
        backgroundImage: `url(${socialImage})`
    }
    return (
        <div>
            <div id={'projects'} className={style.projectsBlock}>
                <div className={style.projectContainer}>
                    <Title title={'Projects'}/>
                    <div className={style.subtitle}>
                        <p>'Twenty years from now you will be more disappointed by the things that you didn't do than by
                            the ones you did do.'</p>
                    </div>
                    <Fade>
                        <div className={style.projects}>
                            <Project style={socialNetwork} title={'Social Network'} href={"https://InnaMiheikina.github.io/samurai-way"} />
                            <Project style={todolist} title={'Todolist'} href={"https://innamiheikina.github.io/todolist-redux"} />
                            <Project style={todolistToolkit} title={'todolistToolkit'} href={"https://InnaMiheikina.github.io/-todolist-redux-toolkit"}/>
                            <Project style={Cards} title={'Cards'} href={"https://InnaMiheikina.github.io/cards-project"}/>
                            <Project style={Counter} title={'Counter'} href={"https://InnaMiheikina.github.io/microtaski"}/>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Projects;