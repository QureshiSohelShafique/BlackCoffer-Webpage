import React from 'react';
import './CallbackSection.css';

const CallbackSection = () => {
  return (
    <section className="callback-section">
      <div className="callback-container">
        <h2 className="callback-title">REQUEST A CALL BACK</h2>
        <h3 className="callback-subtitle">Get your Business Right up There</h3>
        <p className="callback-text">
          When you need intelligent answers to your toughest questions, we're here 
          to help. We're just a call or email away from getting in 
          touch with us. We'll be glad to assist you.
        </p>
        <button className="callback-button">Request a Call Back</button>
      </div>
    </section>
  );
};

export default CallbackSection;