import React from 'react';
import '../styles/Connect.css';

const Connect = () => {
    return (
        <section className='Connect'>
            <div className="title">
                <div></div><p>Connect</p>
            </div>
            <div className='connect-container'>
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
            </div>
        </section>
    );
};

export default Connect;