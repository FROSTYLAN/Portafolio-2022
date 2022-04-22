import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className='About'>
            <div className="title">
                <div></div><p>About</p>
            </div>
            <div className='about-container'>
                <div>
                    <h1>Get a closer look at who i am</h1>
                </div>
                <div className="title uno">
                    <div></div><p>Skill & Tools</p>
                </div>
                <div className='span'>
                    <span>
                        HTML/CSS, JavaScript, React, NodeJS, Express, Postgress, Photoshop
                    </span>
                </div>
                <div className="title uno">
                    <div></div><p>Who am I</p>
                </div>
                <div className='span dos'>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id, perferendis provident excepturi repudiandae iure minima debitis eum soluta? Placeat magnam cupiditate ipsa consequuntur minus quos sit maiores debitis soluta!
                    </span>
                </div>
                <div className='button-container'>
                    <div className='button'>
                        <button>
                            Get in touch
                        </button>
                    </div>
                    <div className='button'>
                        <button className='tres'>
                            download CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;