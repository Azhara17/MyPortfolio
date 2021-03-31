import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <div id="about" className="s-about target-section">
     
          <div className="about-me">
            <div className="heading-block" >
              <div className="column large-full">
                <h2 className="section-heading section-heading--centerbottom">About Me</h2>
              </div>
            </div>
            <div className="row about-me__content" >
              <div className="column large-full about-me__text">
              <img src="/images/Azhara.png" alt="Azhara's picture" className="azhara"  />
                <p className="lead">
                  Hi! I am Azhara Kalbaeva, self-taught <strong><em>Front-End Developer</em></strong>  passionate about sleek and functional design in everything around me. In spare time love drawing seamless patterns and creating architectural 3D visualizations.
                </p>
              </div>
            </div> 
            </div>
          
       
        </div>
      </React.Fragment>
    );
  }
}


