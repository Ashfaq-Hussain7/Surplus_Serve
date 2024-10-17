import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Surplus Serve</h1>
      <p className="about-paragraph">
        Surplus Serve is a platform dedicated to reducing food waste and fighting hunger in our communities. We connect food donors with local organizations and individuals in need, ensuring that surplus food finds its way to those who can benefit from it most.
      </p>
      <p className="about-paragraph">
        Our mission is to create a more sustainable and equitable food system by:
      </p>
      <ul className="about-list">
        <li>Reducing food waste from restaurants, grocery stores, and other food businesses</li>
        <li>Providing nutritious meals to individuals and families facing food insecurity</li>
        <li>Fostering a sense of community and social responsibility</li>
        <li>Promoting environmental sustainability by reducing the environmental impact of food waste</li>
      </ul>
      <p className="about-paragraph">
        Join us in our efforts to make a positive impact on both people and the planet. Whether you're a potential donor or recipient, your participation can help create a more sustainable and caring world.
      </p>
    </div>
  );
}

export default About;