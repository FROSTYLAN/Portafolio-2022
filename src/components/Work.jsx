import React, { useState } from 'react';
import '../styles/Work.css';
import projects from '../proyects.json';

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

    return (
        <section className='Work'>
            <div className="title">
                <div></div><p>Work</p>
            </div>
            <div className='proyect-container'>

                <div className="title-work">
                    <h1>Hand-picked projects for to see.</h1>
                </div>

                <div className='count'>
                    <button onClick={() => decrement()}>
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <span>{`0${cont + 1}/06`}</span>
                    <button onClick={() => increment()}>
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                <div className="proyect">
                    <h3>{projects[cont].title}</h3>
                    <div className="span">
                        <span>{projects[cont].description}</span>
                    </div>
                    <div className="button">
                        <a target="blank" href={projects[cont].url}>
                            <button>View Project</button>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Work;