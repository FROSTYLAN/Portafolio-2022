import React, { useState } from 'react';
import '../styles/Work.css';
import projects from '../proyects.json';
import project1 from '../projects-imgs/project1.png';
import project2 from '../projects-imgs/project2.png';
import project3 from '../projects-imgs/project3.png';
import project4 from '../projects-imgs/project4.png';
import project5 from '../projects-imgs/project5.png';
import project6 from '../projects-imgs/project6.png';

const Work = () => {
    const [cont, setCont] = useState(0);
    const increment = () => {
        if (cont < 5) {
            setCont(cont + 1);
        }
    }
    const decrement = () => {
        if (cont > 0) {
            setCont(cont - 1);
        }
    }
    const projectsImgs = [
        project1,
        project2,
        project3,
        project4,
        project5,
        project6
    ]
    return (
        <section className='Work' id='work'>
            <div className="title title-container__work">
                <div></div><p>Work</p>
            </div>
            <div className='projects-container'>
                <div className='project-container'>
                    <div className="title-work">
                        <h1>Hand-picked projects for to see.</h1>
                    </div>
                    <br />
                    <div className='count'>
                        <button className='arrows' onClick={() => decrement()}>
                            <i class="fa-solid fa-angle-left"></i>
                        </button>
                        <span className='count'>{`0${cont + 1}/06`}</span>
                        <button className='arrows' onClick={() => increment()}>
                            <i class="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                    <br />
                    <div className="project">
                        <h3>{projects[cont].title}</h3>
                        <div className="span">
                            <span>{projects[cont].description}</span>
                        </div>
                        <br />
                        <div className="button">
                            <a target="blank" href={projects[cont].url}>
                                <button>View Project</button>
                            </a>
                        </div>
                    </div>
                </div>
                <figure className='img-container'>
                    <img src={projectsImgs[cont]} alt="" />
                </figure>
            </div>
        </section>
    );
};

export default Work;