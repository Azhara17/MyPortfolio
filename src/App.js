import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header/Header.js';
import About from './components/about/About.js';
import Resume from './components/resume/Resume.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Skills from './components/skills/Skills.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
import ParticlesComponent from './components/particlesComponent/ParticlesComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
            }}
      >
     {/*} <Route exact path="/" component={Header} />*/}
        <ParticlesComponent />
        <div
          style={{
            display: "block",
            verticalAlign: "bottom",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1
          }}
        >
        <Route exact path="/" component={Header} />
          <div>
      </div>
        </div>
      </div>
        </Router>
        <About />
        <Portfolio />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </div>
     
    );
  }
}
export default App;
