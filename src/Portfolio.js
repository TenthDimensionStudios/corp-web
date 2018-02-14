import React, { Component } from 'react';
import Translation from './data/Translation';

class Portfolio extends Component {

    constructor(props){
        super(props);
  
        this.state = {translate: new Translation({})};
    }
    
    render() {
      return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 text-center">
                        <h2 className="sansationLightRegular">{this.state.translate.portfolioIntro}</h2>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="projectDetails">
                <div className="container">

                    <div className="row">
                        <div className="col-md-8">
                            <a href="#" data-toggle="modal" data-target="#lightbox">
                                <img className="img-responsive" ng-src="{translation.mainProjectImage}" alt="..." ng-click="modalLightbox(translation.mainProjectImage,$event)"/>
                            </a>
                        </div>

                        <div className="col-md-4">
                            <h3 className="sansationRegular">{this.state.translate.mainProject}</h3>
                            <p>{this.state.translate.mainProjectInfo}</p>
                            <h3 cclassNamelass="sansationRegular">{this.state.translate.mainProjectDetailsHeader}</h3>
                            <ul>
                                <li ng-repeat="detail in translation.mainProjectDetails">{this.state.translate.detail}</li>
                                <li className="webLink"><a href="{translation.mainProjectLink}">{this.state.translate.mainProjectLinkText}</a></li>

                            </ul>
                            <button className="btn btn-primary pull-right">{this.state.translate.mainProjectAsk}</button>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="sansationLightRegular">{this.state.translate.mainProjectOthers}</h3>
                        </div>
                        <div className="col-sm-3 col-xs-6" ng-repeat="lnk in translation.mainProjectOthersLink">
                            <a href="#" data-toggle="modal" data-target="#lightbox">
                                <img className="img-responsive portfolio-item" ng-src="{lnk}"  alt="..." ng-click="modalLightbox(lnk,$event)"/>
                            </a>
                        </div>					
                    </div>
                    
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Portfolio;