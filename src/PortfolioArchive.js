import React, { Component } from 'react';
import { GetID } from './Functions';

class PortfolioArchiveLinks extends Component{
    render(){
        return(
        <div className="col-sm-3 col-xs-6">
            <a href="#" className="" data-toggle="modal" data-target="#lightbox">
                <img className="img-fluid portfolio-item" src={this.props.lnk} alt="..." ng-click="modalLightbox(lnk,$event)"/>
            </a>
        </div>
        );
    }
}

class PortfolioArchive extends Component {

    render() {
        var rows = [];
        if(this.props.translate.workingProjectDetails){
            var num = this.props.translate.workingProjectDetails.length;
            for(var i = 0; i < num; i++){
                rows.push(<li key={GetID()}>{this.props.translate.workingProjectDetails[i]}</li>);
            }
        }
        
        var rowsOL = [];
        if(this.props.translate.workingProjectOthersLink){
            var num2 = this.props.translate.workingProjectOthersLink.length;
            for(var i2 = 0; i2 < num2; i2++){
                rowsOL.push(<PortfolioArchiveLinks lnk={this.props.translate.workingProjectOthersLink[i2]} key={GetID()} />);
            }
        }

      return (
        <div className="projectDetails">
            {/* Detalle de un proyecto */}
        
            <div className="container">

                <div className="row">
                    <div className="col-md-8">
                        <a href="#" className="" data-toggle="modal" data-target="#lightbox" >
                            <img className="img-fluid" src={this.props.translate.workingProjectImage}  ng-click="modalLightbox(translation.workingProjectImage,$event)" alt="..."/>
                        </a>
                    </div>

                    <div className="col-md-4">
                        <h3 className="sansationRegular">{this.props.translate.workingProject}</h3>
                        <p>{this.props.translate.workingProjectInfo}</p>
                        <h3 className="sansationRegular">{this.props.translate.workingProjectDetailsHeader}</h3>
                        <ul>
                            {rows}
                            <li className="webLink"><a href={this.props.translate.workingProjectLink}>{this.props.translate.workingProjectLinkText}</a></li>

                        </ul>
                        <button className="btn btn-primary pull-right">{this.props.translate.workingProjectAsk}</button>
                    </div>

                </div>
                <div className="row">

                    <div className="col-lg-12">
                        <h3 className="sansationLightRegular">{this.props.translate.workingProjectOthers}</h3>
                    </div>
                    
                    {rowsOL}
                    
                    <div className="row text-center">
                        <a className="btnMoreWorks collapsed noTextDecoration" data-toggle="collapse" data-target="#nuestrosTrabajos">
                            <h4 className="sansationRegular">{this.props.translate.otherProyectsHeader}
                                <span className="fa fa-angle-up"/>
                                <span className="fa fa-angle-down"/>
                            </h4>
                        </a>
                    </div>
                </div>
                {/* projectDetails */}
            </div>
        </div>
      );
    }
  }
  
  export default PortfolioArchive;