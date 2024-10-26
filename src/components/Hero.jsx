import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-left">
                <h1 className="hero-title">
                    TOGETHER WE<br />
                    REINVENTED
                </h1>
            </div>
            <div className="hero-right">
                <div className="hero-description-container">
                    <p className="hero-description">
                        Together, we can reinvent your business. Reinvention is about breaking industry norms. 
                        Our wide range of capabilities, ecosystem partnerships and unmatched industry expertise 
                        can help your business become the next best version of itself.
                    </p>
                </div>
                <button className="hero-button">See what we do</button>
            </div>
        </section>
    );
};

export default Hero;