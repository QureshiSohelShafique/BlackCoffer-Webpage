import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, image, description }) => {
    return (
        <div className="service-card">
            <img src={image} alt={title} className="service-image" />
            <div className="service-title">{title}</div>
            <div className="service-overlay">
                <p className="service-description">{description}</p>
            </div>
        </div>
    );
}

export default ServiceCard;
