import React from 'react';
import '../styles/Intro.css';
import introImg from '../imgs/intro-img.png'

const Intro = () => {
    return (
        <section className='Intro'>
            <div className='presentation'>
                <div className='iam'>
                    <h1>Hey, I'm <b>Charles</b></h1>
                    <h3>a <b>self-taught</b> designer</h3>
                    <h3>& front-end developer.</h3>
                </div>
                <div className='span'>
                    <span>
                        Stick around to see some of my work.
                    </span>
                </div>
                <div className='button'>
                    <button>
                        See my work
                    </button>
                </div>
            </div>
            <figure className='intro-img'>
                <div><img src={introImg} alt="intro" /></div>
            </figure>
        </section>
    );
};

export default Intro;