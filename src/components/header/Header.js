import React, {Component} from 'react';


class Header extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
      <header className="s-header header-nav-wrap">
      <nav className="header-main-nav navbar fixed-top">
      <div className="navbar">
      <ul className= " nav navbar-nav">
        <li className="nav-item active"><a className="smoothscroll" href="#about">About</a></li>
        <li className="nav-item active"><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
        <li className="nav-item active"><a className="smoothscroll" href="#resume">Resume</a></li>
        <li className="nav-item active"><a className="smoothscroll" href="#contact">Contact Me</a></li>
      </ul>
    </div>
    <ul className="header-social">
                <li><a id="linkedin" href="https://www.linkedin.com/in/azhara-kalbaeva-840619168/"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                <li><a id="github" href="https://github.com/Azhara17/"><i className="fab fa-github" aria-hidden="true" /></a></li>
              </ul>

      </nav>
        <button onClick={this.showMenu} className="header-menu-toggle" type="button" data-toggle="toggle" 
     aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>   
        {
          this.state.showMenu
            ? (
              <header className="s-header header-menu-toggle">
              <nav className="navbar navbar-dark navbar-expand-mb fixed-top">
              <div className="navbar-collapse collapse" id="navbar-collapsible">
      <ul className= "header-main-nav nav navbar-nav mr-auto">
        <li className="nav-item active"><a className="smoothscroll" href="#about">About</a></li>
        <li className="nav-item active"><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
        <li className="nav-item active"><a className="smoothscroll" href="#resume">Resume</a></li>
        <li className="nav-item active"><a className="smoothscroll" href="#contact">Contact Me</a></li>
      </ul>
    </div>
    </nav>
    </header>
            )
            : (
              null
            )
        }
  </header>
          <section id="intro" className="s-intro target-section">
            <div className="row intro-content">
              <div className="column large-9 mob-full intro-text">
                <h3>Hello, I'm Azhara</h3>
                <h1>
                  Front-End Web Developer <br />
                  Based In Dubai.
                </h1>
              </div>
              <div className="intro-scroll">
                <a href="#about" className="intro-scroll-link smoothscroll">
                  Scroll For More
                </a>
              </div>
            </div> {/* end row */}
          </section>
        
        </div>
      
    );
  }
};
export default Header;

  