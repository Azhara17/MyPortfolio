import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume" className="s-resume target-section">
      <div className="resume">
            <div className="row heading-block" >
              <div className="column large-full">
                <h2 className="section-heading">Work &amp; Education</h2>
              </div>
            </div>
            <div className="row resume__timeline">
              <div className="column large-half tab-full" >
                <div className="timeline">
                  <div className="timeline__icon-wrap">
                    <span className="timeline__icon timeline__icon--work" />
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet" />
                    <div className="timeline__header">
                      <p className="timeline__timeframe">December 2019 - March 2020</p>
                      <h3 className="item-folio__title">Flydubai</h3>
                      <h5>Flight Dispatcher Trainee</h5>
                    </div>
                    <div className="timeline__desc">
                      <p>Analyzing weather (METAR, TAF, SIG WX etc.), NOTAMS, MEL requirements in order to plan safe and efficient flight.
Filing ATC and Operational Flight Plans. Flight watching, advising flight crew on routes, FL.</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet" />
                    <div className="timeline__header">
                      <p className="timeline__timeframe">July 2016- September 2019</p>
                      <h3 className="item-folio__title">Emirates Airlines</h3>
                      <h5>Cabin Service Assisstant </h5>
                    </div>
                    <div className="timeline__desc">
                      <p>Assisting First Class cabin crew.
Providing excellent service to first class passengers.</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet" />
                    <div className="timeline__header">
                      <p className="timeline__timeframe">May 2014 - January 2016</p>
                      <h3 className="item-folio__title">Limak Arcadia Resort</h3>
                      <h5>Front Office Receptionist</h5>
                    </div>
                    <div className="timeline__desc">
                      <p>Handle check-in and check-out operations. Compute bills and payments. Resolve guest complains.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column large-half tab-full" >
                <div className="timeline">
                  <div className="timeline__icon-wrap">
                    <span className="timeline__icon timeline__icon--education" />
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet" />
                    <div className="timeline__header">
                      <p className="timeline__timeframe">January 2021</p>
                      <h4 className="item-folio__title">London App Brewery</h4>
                      <h5>The Complete 2021 Web Development Online Bootcamp</h5>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet" />
                    <div className="timeline__header">
                      <p className="timeline__timeframe">November 2019</p>
                      <h4 className="item-folio__title">Emirates Aviation University</h4>
                      <h5>Flight Dispatcher Course</h5>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet" />
                    <div className="timeline__header">
                      <p className="timeline__timeframe">January 2017 - October 2018</p>
                      <h3 className="item-folio__title">Edith Cowan University</h3>
                      <h5>Aviation Security Management</h5>
                    </div>
                    
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet" />
                    <div className="timeline__header">
                      <p className="timeline__timeframe">September 2009 - May 2014</p>
                      <h3 className="item-folio__title">Kyrgyzstan-Turkey Manas University</h3>
                      <h5>Tourism and Hotel Management</h5>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </section>
      
      </React.Fragment>
    );
  }
}

