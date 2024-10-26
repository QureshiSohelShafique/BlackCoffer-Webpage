import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Success.css';

const stories = [
  {
    date: '2024 March 17',
    title: 'Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development'
  },
  {
    date: '2024 March 17',
    title: 'Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Application'
  }
];

const Success = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Success Stories</h2>
          <button className="read-all-button">
            Read all stories
            <ArrowRight className="arrow-icon" />
          </button>
        </div>

        <div className="stories-grid">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-date">{story.date}</div>
              <h3 className="story-title">{story.title}</h3>
            </div>
          ))}
        </div>

        <div className="navigation-buttons">
          <button className="nav-button">
            <ArrowRight className="arrow-icon rotate" />
          </button>
          <button className="nav-button">
            <ArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Success;