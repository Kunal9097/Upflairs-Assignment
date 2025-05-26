import React from "react";
import "./App.css";

const Header = () => (
  <div className="header">
    <h1>
      <span style={{ color: "#cc0000" }}>Cool</span>
      <span style={{ color: "#fbb" }}>Logo</span>
     
    </h1>
     <a className="navbar"  href="#">About</a>
    <a  className="navbar" href="#">Contact</a>
    <a className="navbar"  href="#">FAQ</a>
    <a  className="navbar" href="#">Help</a>
  </div>
);

// const Navbar = () => (
//   <div className="navbar">
//     <a href="#">About</a>
//     <a href="#">Contact</a>
//     <a href="#">FAQ</a>
//     <a href="#">Help</a>
//   </div>
// );

const Hero = () => (
  <div className="hero">
    <h1>Heading</h1>
  </div>
);

const MainContent = () => (
  <div className="container">
    <div className="left">
      <h3>Left heading</h3>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
        <li><a href="#">Link 5</a></li>
      </ul>
    </div>
    <div className="right">
      <p className="code-link">View Template Source Code</p>
      <p>
        Peace comes from within. Do not seek it without. If the facts don't fit the theory, change the facts. The smaller your reality, the more convinced you are that you know everything.
      </p>
      <h2>Heading</h2>
      <p>The most important moment of your life is now...</p>
      <p>You will not be punished for your anger, you will be punished by your anger.</p>
      <h2>Heading</h2>
      <p>The most important moment of your life is now. Peace comes from within. Do not seek it without.</p>
    </div>
  </div>
);

const Footer = () => (
  <div className="footer">
    <div className="footer-box">
      <h2>Heading</h2>
      <p>The most important moment of your life is now.</p>
    </div>
    <div className="footer-box">
      <h2>Heading</h2>
      <p className="red">You will be punished by your anger.</p>
    </div>
    <div className="footer-box">
      <h2>Heading</h2>
      <p className="red">This too shall pass.</p>
    </div>
  </div>
);

const App = () => (
  <div className="app">
    <Header />
    {/* <Navbar /> */}
    <Hero />
    <MainContent />
    <Footer />
  </div>
);

export default App;
