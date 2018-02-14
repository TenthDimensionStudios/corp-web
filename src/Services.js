import React, { Component } from 'react';
import Translation from './data/Translation';

class Services extends Component {

    constructor(props){
        super(props);
    }
    
    render() {
      return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2 className="sansationLightRegular">{this.props.translate.servicesHead}</h2>
                <br />
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 col-xs-12">
            <div className="col-md-3 text-center">
                <div className="service-item">
                    <i className="service-icon fa fa-cogs"></i>
                    <h4 className="sansationLightRegular">{this.props.translate.cogsIntro}</h4>
                    <p>{this.props.translate.cogsInfo}</p>
                    <p><a className="service-link" href="https://isolandimension.com/ErebusEngine.html">{this.props.translate.cogsVisit}</a></p>
                </div>
            </div>
            <div className="col-md-6 featuredContent text-center">
                <div className="service-item">
                    <i className="service-icon fa fa-star"></i>
                    <h4 className="sansationLightRegular">{this.props.translate.starIntro}</h4>
                    <p>{this.props.translate.starInfo}</p>
                    <p>{this.props.translate.starInfo2}</p>
                    <p><a href="https://isolandimension.com">{this.props.translate.starVisit}</a></p>
                </div>
            </div>
            <div className="col-md-3 text-center">
                <div className="service-item">
                    <i className="service-icon fa fa-code-fork"></i>
                    <h4 className="sansationLightRegular">{this.props.translate.codeIntro}</h4>
                    <p>{this.props.translate.codeInfo}</p>
                </div>
            </div>
            </div>				
        </div>
        <div className="row">
            <div className="col-md-12 col-xs-12">
            
            <div className="col-md-6 text-center">
                <div className="service-item">
                    <i className="service-icon fa fa-cloud"></i>
                    <h4 className="sansationLightRegular">{this.props.translate.cloudIntro}</h4>
                    <p>{this.props.translate.cloudInfo}</p>
                    <p><a className="service-link" href="http://isolandimension.com/ErebusEngine.html">{this.props.translate.cloudVisit}</a></p>
                </div>
            </div>				
            <div className="col-md-6 text-center">
                <div className="service-item">
                    <i className="service-icon fa fa-flag"></i>
                    <h4 className="sansationLightRegular">{this.props.translate.flagIntro}</h4>
                    <p>{this.props.translate.flagInfo}</p>
                </div>
            </div>
            </div>				
        </div>
    </div>
      );
    }
  }
  
  export default Services;