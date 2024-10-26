import React from 'react';
import { Target, BarChart2, Globe, Users, Lock, Eye } from 'lucide-react';
import './Expertise.css';

const features = [
  { icon: Target, title: 'Consistency' },
  { icon: BarChart2, title: 'Improvement' },
  { icon: Globe, title: 'Branching' },
  { icon: Users, title: 'Expertise' },
  { icon: Lock, title: 'Security' },
  { icon: Eye, title: 'Transparency' },
];

const FeatureBox = ({ icon: Icon, title }) => (
  <div className="feature-box">
    <Icon className="feature-icon" />
    <span className="feature-title">{title}</span>
  </div>
);

const Expertise = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">What Makes Us Different</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureBox key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
