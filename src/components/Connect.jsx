import React from 'react';
import '../styles/Connect.css';

const Connect = () => {
    return (
        <section className='Connect'>
            
            <div className='connect-container' id='connect'>
                <div className="title">
                    <div></div><p>Connect</p>
                </div>
                <div>
                    <h1>Interested in working with me</h1>
                    <h1>or perhaps just talk?</h1>
                </div>
                <div className='space'></div>
                <div className='span'>
                    <span>Reach me on social media or by sending an</span>
                </div>
                <div className='span'>
                    <span>email to </span>
                    <span className='red'>castillo089frosty@gmail.com</span>
                </div>
                <div className='space'></div>
                <div className='button'>
                    <button>
                        Get in touch
                    </button>
                </div>
                <br />
                <div className='redes'>
                    <div className="red">
                        <a target="blank" href="https://github.com/FROSTYLAN">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <div className="red">
                        <a target="blank" href="https://www.linkedin.com/in/charles-castillo-772968234/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="red">
                        <a target="blank" href="https://www.youtube.com/channel/UCeEolCunsX0h3Q7W0-b8EoQ">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="credit">
                <h3>Made by Charles Castillo</h3>
                <span>© Copyright 2022</span>
            </div>
        </section>
    );
};

export default Connect;