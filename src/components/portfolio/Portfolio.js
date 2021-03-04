import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio" className="s-portfolio target-section">
          <div className="row heading-block heading-block--center" >
            <div className="column large-full">
              <h2 className="section-heading section-heading--centerbottom">Selected Works</h2>
              <p className="section-desc">
                Here are some of my selected works. Feel free to 
                check them out.
              </p>
            </div>
          </div> {/* end heading-block */}
          <div className="masonry-wrap">
            <div className="masonry">
              <div className="grid-sizer" />
              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a href="https://github.com/Azhara17/e-commerce.git" className="thumb-link" title="Go to GitHub" data-size="1050x700">
                      <img src="images/portfolio/shopping-app.png" srcSet="images/portfolio/shopping-app.png 1x, images/portfolio/shopping-app.png@2x.jpg 2x" alt="e-commerce" />
                    </a>    
                  </div>
                  <div className="item-folio__text">
                    <h4 className="item-folio__title">
                      Shopit
                    </h4>
                    <p className="item-folio__cat">
                    Minimalistic e-commerce website.
                    </p>
                  </div>
                </div>
              </div> {/* end masonry__brick */}
              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a href="https://github.com/Azhara17/TinDog.git" className="thumb-link" title="Go to GitHub" data-size="1050x700">
                      <img src="images/portfolio/tindog-app.png" srcSet="images/portfolio/tindog-app.png 1x, images/portfolio/tindog-app.png@2x.jpg 2x" alt="tin-dog app" />
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
              <div className="masonry__brick" >
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a href="https://github.com/Azhara17/Keeper-app.git" className="thumb-link" title="Go to GitHub" data-size="1050x700">
                      <img src="images/portfolio/keeper-app.png" srcSet="images/portfolio/keeper-app.png 1x, images/portfolio/keeper-app.png@2x.jpg 2x" alt="keeper-app" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h4 className="item-folio__title">
                      Note Keeper
                    </h4>
                    <p className="item-folio__cat">
                    Notes app made with React.
                    </p>
                  </div>
                </div>
              </div> {/* end masonry__brick */}
             {/*} <div className="masonry__brick" >
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a href="https://github.com/Azhara17/Simon-game.git" className="thumb-link" title="Go to GitHub" >
                      <img src="images/portfolio/Simon-game.png" srcSet="images/portfolio/Simon-game.png 1x, images/portfolio/Simon-game.png@2x.jpg 2x" alt="simon game" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h4 className="item-folio__title">
                      Simon Game
                    </h4>
                    <p className="item-folio__cat">
                      Web Development
                    </p>
                  </div>
                  <div className="item-folio__caption">
                    <p>Classic Simon Game.</p>
                  </div>
                </div>
              </div> {/* end masonry__brick */}
              <div className="masonry__brick" >
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a href="https://dry-cove-34645.herokuapp.com/" className="thumb-link" title="Go to Heroku" data-size="1050x700">
                      <img src="images/portfolio/todolist.png" srcSet="images/portfolio/todolist.png 1x, images/portfolio/todolist.png@2x.jpg 2x" alt="to-do-app" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h4 className="item-folio__title">
                      To-Do List App
                    </h4>
                    <p className="item-folio__cat">
                    To-Do List App deployed on Heroku.
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