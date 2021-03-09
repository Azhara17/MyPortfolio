import React, {Component} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Header extends Component {

  render() {
      return (
      <div>
      <div>
      <Navbar className=" header-nav-wrap header-main-nav" collapseOnSelect fixed="top" expand="sm"  >
      <Container className=" header-nav-wrap header-main-nav">
      <Navbar.Toggle  aria-controls="responsive-navbar-nav " />
      <Navbar.Collapse id="responsive-navbar-nav ">
      <Nav  className="mr-auto">
      <header>
      <nav>
          <ul > 
        <li className="nav-item active"><a className="smoothscroll" href="#about">About</a></li>
        <li className="nav-item active"><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
        <li className="nav-item active"><a className="smoothscroll" href="#resume">Resume</a></li>
        <li className="nav-item active"><a className="smoothscroll" href="#contact">Contact Me</a></li>
          </ul>
          <ul className="header-social">
                <li><a id="linkedin" href="https://www.linkedin.com/in/azhara-kalbaeva-840619168/"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                <li><a id="github" href="https://github.com/Azhara17/"><i class="fab fa-github" aria-hidden="true" /></a></li>
              </ul>
        </nav>
        
       </header>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
          <section id="intro" className="s-intro target-section">
            <div className="row intro-content">
              <div className="column large-9 mob-full intro-text">
              <h1>
                  Hello, <br />
                   I am Azhara
                </h1>
                <h3>Front-End <br />
                 Web Developer <br />
                  Based In Dubai.</h3>
              </div>
              <div className="intro-scroll">
                <a href="#about" className="intro-scroll-link smoothscroll">
                  Scroll For More
                </a>
              </div>
            </div> 
          </section>
          </div>
      );
  }
  };


  