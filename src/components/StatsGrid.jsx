import React from 'react';
import './StatsGrid.css';

const statsData = [
    { title: '12+', subtitle: 'Years of Experience', icon: '📅' },
    { title: '100+', subtitle: 'Clients', icon: '👥' },
    { title: '97%', subtitle: 'Client Retention Rate', icon: '📈' },
    { title: '40+', subtitle: 'AI Solutions', image: '/Aii.png' },
    { title: '350+', subtitle: 'Employees', icon: '👤' },
    { title: '2+', subtitle: 'Countries', icon: '🌍' },
    { title: '80+', subtitle: 'Big Data Solutions', image: '/big_data_image.png' },
    { title: 'Dedicated to', subtitle: 'Providing Top-Notch Big Data Analytics & BI Services' },
];

const StatsGrid = () => {
    return (
        <section className="stats-section">
            <p>The reason why Blackcoffer stands out</p>
            <h2>Blackcoffer Unfolds Solutions To Everything</h2>
            <div className="stats-grid">
                {statsData.map((stat, index) => (
                    <div key={index} className={`stat-item ${index === 3 || index === 6 ? 'image-item' : ''}`}>
                        {stat.image ? (
                            <div className="image-bg" style={{ backgroundImage: `url(${stat.image})` }}>
                                <h3>{stat.title}</h3>
                            </div>
                        ) : (
                            <>
                                <h3>{stat.title}</h3>
                                <p>{stat.subtitle}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsGrid;
