import React from "react";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">MonSite</div>
      <nav>
        <a href="#features">Fonctionnalités</a>
        <a href="#contact">Contact</a>
        <button className="cta-button">S'inscrire</button>
      </nav>
    </header>
  );
};

export default Header;