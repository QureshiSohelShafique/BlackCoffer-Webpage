import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import StatsGrid from './components/StatsGrid';
import Expertise from './components/Expertise';
import Success from './components/Success';
import CallbackSection from './components/CallbackSection';
import Footer from './components/Footer';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <ServicesSection />
            <StatsGrid />
            <Expertise />
            <Success />
            <CallbackSection />
            <Footer />
        </div>
    );
}

export default App;
