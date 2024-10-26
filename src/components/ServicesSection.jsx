import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';

const services = [
    { title: 'Big Data & Analytics', image: '/big_data.png', description: 'We are committed to providing quality products and services that add value to your business and to run your business successfully.' },
    { title: 'Consultancy', image: '/consultancy.png', description: 'Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.' },
    { title: 'HR & Staffing', image: '/hrstaffing.png', description: 'Blackcoffer offers a full complement of human resource and recruitment services.' },
    { title: 'Cybersecurity', image: '/cybersecurity.png', description: 'Infuse cybersecurity into your strategy and ecosystem to protect value, help prevent threats and build trust as you grow.' },
    { title: 'Consultancy', image: '/consulltancy2.png', description: 'Our consulting and strategic group offers Business Transformations, Information Technology Transformation and Human Resource Analytics Transformation.' },
    { title: 'Sustainability', image: '/sustainability.png', description: 'Sustainability spans environmental, social and governance issues. Today every organization must embrace sustainability for future competitiveness.' },
    { title: 'Cloud', image: '/cloud.png', description: 'Every day, cloud computing becomes more integral in driving reinvention and meeting the ever-changing needs of people around the world.' },
    { title: 'Metaverse', image: '/metaverse.png', description: 'The physical and virtual worlds are blending. The metaverse offers new ways to connect, create and consume.' },
];

const ServicesSection = () => {
    return (
        <section className="services-section">
            <h2>Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        image={service.image}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default ServicesSection;
