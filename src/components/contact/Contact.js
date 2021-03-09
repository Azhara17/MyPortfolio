import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      <div>
      <section id="contact" className="s-contact target-section">
      <div className=" container">
          <div  >
            <div className="column large-full">
              <h2 className="section-heading">Get In Touch</h2>
            </div>
          </div>
          <div className="row contact-main" >
            <div className="column large-full">
              
              <p className="section-desc">
                Let's work together and build
                something awesome.<br />
                <a className="email-me" href="mailto:az.kalbaeva@gmail.com">Email Me</a>
                <p className="contact-email">
                <a href="mailto:az.kalbaeva@gmail.com">az.kalbaeva@gmail.com</a>
              </p>
              </p>
            </div>
          </div>
          <div className="row contact-infos"  data-aos-anchor=".contact-main">
            {/*<div className="column large-5 medium-full contact-phone">
              <h4>Call Me</h4>
              <a href="tel:00971526255662">+971 526 255 662</a>
            </div>*/}
            <div className="column large-7 medium-full contact-social">
              <h4>Social</h4>
              <ul>
              <li><a href="https://www.linkedin.com/in/azhara-kalbaeva-840619168/" title="Instagram">LinkedIn</a></li>
                <li><a href="https://github.com/Azhara17" title="Github">Github</a></li>
                <li><a href="https://twitter.com/azh_kalbaeva/" title="Twitter">Twitter</a></li>
                
              </ul>
            </div>
            </div>
          </div> {/* end contact-infos */}
        </section> 
        </div>
      
      </React.Fragment>
    );
  }
}