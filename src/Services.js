import React, { Component } from 'react';
import translation from './data/Translation';

class Services extends Component {
    render() {
      return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2 className="sansationLightRegular">{translation.servicesHead}</h2>
                <br />
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 col-xs-12">
            <div className="col-md-3 text-center">
                <div className="service-item">
                    <i className="service-icon fa fa-cogs"></i>
                    <h4 className="sansationLightRegular">{translation.cogsIntro}</h4>
                    <p>{translation.cogsInfo}</p>
                    <p><a className="service-link" href="http://isolandimension.com/ErebusEngine.html">{translation.cogsVisit}</a></p>
                </div>
            </div>
            <div className="col-md-6 featuredContent text-center">
                <div className="service-item">
                    <i className="service-icon fa fa-star"></i>
                    <h4 className="sansationLightRegular">{translation.starIntro}</h4>
                    <p>{translation.starInfo}</p>
                    <p>{translation.starInfo2}</p>
                    <p><a href="http://isolandimension.com">{translation.starVisit}</a></p>
                </div>
            </div>
            <div className="col-md-3 text-center">
                <div className="service-item">
                    <i className="service-icon fa fa-code-fork"></i>
                    <h4 className="sansationLightRegular">{translation.codeIntro}</h4>
                    <p>{translation.codeInfo}</p>
                </div>
            </div>
            </div>				
        </div>
        <div className="row">
            <div className="col-md-12 col-xs-12">
            
            <div className="col-md-6 text-center">
                <div className="service-item">
                    <i className="service-icon fa fa-cloud"></i>
                    <h4 className="sansationLightRegular">{translation.cloudIntro}</h4>
                    <p>{translation.cloudInfo}</p>
                    <p><a className="service-link" href="http://isolandimension.com/ErebusEngine.html">{translation.cloudVisit}</a></p>
                </div>
            </div>				
            <div className="col-md-6 text-center">
                <div className="service-item">
                    <i className="service-icon fa fa-flag"></i>
                    <h4 className="sansationLightRegular">{translation.flagIntro}</h4>
                    <p>{translation.flagInfo}</p>
                </div>
            </div>
            </div>				
        </div>
    </div>
      );
    }
  }
  
  export default Services;