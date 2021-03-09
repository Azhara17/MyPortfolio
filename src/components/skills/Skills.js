import React, { Component } from 'react';

export default class Skills extends Component {
    render() {
        return (
    
      <React.Fragment>
      <section id="skills" className="s-skills target-section">
          
            <div className="container">
              <h2 className="section-heading section-heading--centerbottom">Skills</h2>
            
            </div>
            <div className="container">
              <div className="grid-sizer" />
                  <div className="item-folio__thumb">
                      <img className="icon" src="skills/html5.png" alt="html5" width="100" height="100"/>  
                  </div>
                  <div className="item-folio__thumb">
                      <img className="icon" src="skills/css3.png" alt="css3" width="100" height="100"/>  
                  </div>
                  <div className="item-folio__thumb">
                      <img className="icon" src="skills/js.png" alt="js" width="100" height="100"/>  
                  </div>
                  <div className="item-folio__thumb">
                      <img className="icon" src="skills/react.png" alt="react" width="100" height="100"/>  
                  </div>
                  
                  <div className="item-folio__thumb">
                      <img className="icon" src="skills/bootstrap.png" alt="bootstrap" width="100" height="100"/>  
                  </div>
                  <div className="item-folio__thumb">
                      <img className="icon" src="skills/mongodb.png" alt="mongodb" width="100" height="100"/>  
                  </div>
               
        
            </div> 

        </section> 
      
      </React.Fragment>
    );
  }
}

