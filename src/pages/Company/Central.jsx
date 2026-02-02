import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import heroImage from '../../assets/cargo.jpg';
import './Central.css';

const Central = () => {
  return (
    <div className="central-page">
      <header className="central-header">
        <div className="central-header-container">
          <div className="central-logo">
            <img 
              src={logoImg} 
              alt="GRI Diamond International Cargo Logistics, Inc." 
              className="logo-image" 
            />
          </div>
          
          <nav className="central-nav">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICES</a>
            <a href="#contact">CONTACT</a>
            <Link to="/apply" className="central-apply-btn">
              APPLY HERE
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="hero-section" 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            Moving Cargoes,<br />Moving Forward
          </h1>
          <p className="hero-subtitle">
            Commitment to quality service is our priority.
          </p>
          <button className="hero-cta-btn">
            See our Services
          </button>
        </div>
      </section>

      {/* WHO WE ARE Section - Enhanced */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <div className="about-content">
            <h2 className="section-title">WHO WE ARE</h2>
            <div className="about-description">
              <p className="section-text">
                We are a freight forwarding company with more than four decades in the industry.
                We pride ourselves in providing quality service on freight forwarding,
                transportation, and brokerage services.
              </p>
              <p className="section-text">
                Moreover, we also offer a wide range of transportation and logistic solutions for 
                importing and exporting clients domestically and internationally.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">📅</div>
                <h3>40+ Years</h3>
                <p>Of industry experience</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🌍</div>
                <h3>Global Reach</h3>
                <p>Domestic & international services</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">⭐</div>
                <h3>Quality Service</h3>
                <p>Our top priority</p>
              </div>
            </div>
            <button className="learn-more-btn">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES Section - Enhanced with detailed services */}
      <section id="services" className="section services-section">
        <div className="section-container">
          <div className="services-intro">
            <h2 className="section-title">BUSINESS SOLUTIONS</h2>
            <p className="section-text services-description">
              Our extensive range of expertise and services are well-integrated to provide 
              our clients their needs and quality service they deserve. Our versatility allows 
              our client to negotiate and customize our services in accordance to their desired 
              outcome, while considering the optimal costs for both parties. We offer a complete 
              range of import and export logistic services via multimodal transportation for 
              commercial and personal cargoes.
            </p>
            <button className="discover-btn">
              Discover more
            </button>
          </div>

          <div className="services-grid">
            {/* Sea Freight Forwarding */}
            <div className="service-card">
              <div className="service-icon">🚢</div>
              <h3 className="service-title">Sea Freight Forwarding</h3>
              <p className="service-description">
                Being a Non-Vessel Operating Common Carrier (NVOCC), 6R Diamond aims to be 
                globally recognized as a one stop shop logistic provider that offers quality 
                and comprehensive sea freight forwarding services.
              </p>
              <button className="service-learn-btn">
                Learn more
              </button>
            </div>

            {/* Air Freight Forwarding */}
            <div className="service-card">
              <div className="service-icon">✈️</div>
              <h3 className="service-title">Air Freight Forwarding</h3>
              <p className="service-description">
                6R Diamond upholds its commitment of providing fast, reliable and 
                cost-efficient air freight forwarding service to its clients around the globe.
              </p>
              <button className="service-learn-btn">
                Learn more
              </button>
            </div>

            {/* Customs Clearance and Brokerage */}
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3 className="service-title">Customs Clearance & Brokerage</h3>
              <p className="service-description">
                With more than 40 years of experience in providing customs clearance and 
                brokerage services, 6R Diamond specializes in preparing, filing and processing 
                all the requirements needed for importation and exportation.
              </p>
              <button className="service-learn-btn">
                Learn more
              </button>
            </div>

            {/* Inland Transportation */}
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3 className="service-title">Inland Transportation</h3>
              <p className="service-description">
                As the company commits to deliver cost-effective logistic solutions, 6R Diamond 
                offers a wide-range of inland transport services to its clients.
              </p>
              <button className="service-learn-btn">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT Section - Enhanced */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <h2 className="section-title">CONTACT US</h2>
          <div className="contact-content">
            <p className="section-text contact-text">
              Let us know how we can be of help. We will be glad to serve you.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>+63 (32) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>info@gridiamond.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Headquarters</h3>
                  <p>Cebu Business Park, Cebu City</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Your Email" className="form-input" />
              <textarea placeholder="Your Message" className="form-textarea" rows="4"></textarea>
              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="central-footer">
        <div className="footer-container">
          <div className="footer-logo">
            <span>GRI DIAMOND</span>
            <span className="footer-subtitle">International Cargo Logistics, Inc.</span>
          </div>
          <div className="footer-links">
            <Link to="/apply" className="footer-apply-btn">
              Apply for a Position
            </Link>
            <p className="footer-copyright">
              © 2024 GRI Diamond International Cargo Logistics, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Central;