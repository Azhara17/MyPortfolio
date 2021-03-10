import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio" className="s-portfolio target-section">
          
            <div className="column ">
              <h2 className="section-heading section-heading--centerbottom">Selected Works</h2>
              <p className="section-desc">
                Here are some of my selected works. <br/>Feel free to 
                check them out.
              </p>
            
          </div> {/* end heading-block */}
          <div className="masonry-wrap">
            <div className="masonry">
              <div className="grid-sizer" />
              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a href="https://github.com/Azhara17/e-commerce.git" className="thumb-link" title="Go to GitHub" >
                      <img src="images/portfolio/shopping-app.png"  alt="e-commerce" width="400" height="350"/>
                    </a>    
                  </div>
                  <div className="item-folio__text">
                    <h4 className="item-folio__title">
                      Shopit
                    </h4>
                    <p className="item-folio__cat">
                    E-commerce website.
                    </p>
                  </div>
                </div>
              </div> {/* end masonry__brick */}
              <div className="masonry__brick" >
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a href="https://dry-cove-34645.herokuapp.com/" className="thumb-link" title="Go to Heroku" >
                      <img src="images/portfolio/todolist.png"  alt="to-do-app" width="400" height="350" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h4 className="item-folio__title">
                      To-Do List App
                    </h4>
                    <p className="item-folio__cat">
                    ToDo List App deployed on Heroku.
                    </p>
                  </div>
                </div>
              </div> {/* end masonry__brick */}
              <div className="masonry__brick" >
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a href="https://github.com/Azhara17/Keeper-app.git" className="thumb-link" title="Go to GitHub" >
                      <img src="images/portfolio/keeper-app.png"  alt="keeper-app" width="400" height="350"/>
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h4 className="item-folio__title">
                      Note Keeper
                    </h4>
                    <p className="item-folio__cat">
                    Made with React.
                    </p>
                  </div>
                </div>
              </div> {/* end masonry__brick */}
              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a href="https://github.com/Azhara17/TinDog.git" className="thumb-link" title="Go to GitHub" >
                      <img src="images/portfolio/tindog-app.png"  alt="tin-dog app" width="400" height="350"/>
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h4 className="item-folio__title">
                      Tindog App
                    </h4>
                    <p className="item-folio__cat">
                    Tindog App Design.
                    </p>
                  </div>
                </div>
              </div> {/* end masonry__brick */}

              
            </div> {/* end masonry */}
          </div> {/* end masonry-wrap */}
        </section> 
      
      </React.Fragment>
    );
  }
}