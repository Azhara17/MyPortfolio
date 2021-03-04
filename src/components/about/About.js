import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <div id="about" className="s-about target-section">
      <section >
          <div className="about-me">
            <div className="row heading-block" >
              <div className="column large-full">
                <h2 className="section-heading">About Me</h2>
              </div>
            </div>
            <div className="row about-me__content" >
              <div className="column large-full about-me__text">
              <img src="/images/Azhara.png" alt="Azhara's picture" className="azhara"  />
                <p className="lead">
                  Hi! I am Azhara Kalbaeva, self-taught <strong><em>Front-End Developer</em></strong>  passionate about sleek and functional design in everything around me. I live in an amazing city Dubai. In spare time love drawing seamless patterns and creating architectural 3D visualizations.
                </p>
              </div>
            </div> 
            </div>
          
        </section>
        </div>
      </React.Fragment>
    );
  }
}


