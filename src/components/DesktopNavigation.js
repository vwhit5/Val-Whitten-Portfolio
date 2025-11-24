import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNavigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* Removed BILD AI STRATEGY & GTM */}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;