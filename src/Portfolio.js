import React, { Component } from 'react';


function GetID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };

class OthersLink extends Component{
    render(){
        return(
        <div className="col-sm-3 col-xs-6">
            <a href="#" data-toggle="modal" data-target="#lightbox">
                <img className="img-responsive portfolio-item" src={this.props.lnk}  alt="..." ng-click="modalLightbox(lnk,$event)"/>
            </a>
        </div>	
        );
    }
}

class Portfolio extends Component {


    render() {
        var rows = [];
        if(this.props.translate.mainProjectDetails){
            var num = this.props.translate.mainProjectDetails.length;
            for(var i = 0; i < num; i++){
                rows.push(<li key={GetID()}>{this.props.translate.mainProjectDetails[i]}</li>);
            }
        }
        
        var rowsOL = [];
        if(this.props.translate.mainProjectOthersLink){
            var num2 = this.props.translate.mainProjectOthersLink.length;
            for(var i2 = 0; i2 < num2; i2++){
                rowsOL.push(<OthersLink lnk={this.props.translate.mainProjectOthersLink[i2]} key={GetID()} />);
            }
        }

      return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 text-center">
                        <h2 className="sansationLightRegular">{this.props.translate.portfolioIntro}</h2>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="projectDetails">
                <div className="container">

                    <div className="row">
                        <div className="col-md-8">
                            <a href="#" data-toggle="modal" data-target="#lightbox">
                                <img className="img-responsive" src={this.props.translate.mainProjectImage} alt="..." ng-click="modalLightbox(translation.mainProjectImage,$event)"/>
                            </a>
                        </div>

                        <div className="col-md-4">
                            <h3 className="sansationRegular">{this.props.translate.mainProject}</h3>
                            <p>{this.props.translate.mainProjectInfo}</p>
                            <h3 className="sansationRegular">{this.props.translate.mainProjectDetailsHeader}</h3>
                            <ul>
                                {rows}                           
                                <li className="webLink"><a href={this.props.translate.mainProjectLink}>{this.props.translate.mainProjectLinkText}</a></li>
                            </ul>
                            <button className="btn btn-primary pull-right">{this.props.translate.mainProjectAsk}</button>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="sansationLightRegular">{this.props.translate.mainProjectOthers}</h3>
                        </div>
                        {rowsOL}				
                    </div>
                    
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Portfolio;