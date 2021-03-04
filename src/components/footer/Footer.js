import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>
          <div className="row">
            <div className="column large-full ss-copyright">
              <span>© Copyright Kalbaeva {new Date().getFullYear()}</span> 
            
            </div>            
            <div className="ss-go-top">
              <a className="smoothscroll" title="Back to Top" href="#top" />
            </div>
          </div>
        </footer>
      <header id="footer">
      </header>
      </React.Fragment>
    );
  }
}