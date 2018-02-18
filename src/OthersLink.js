import React, { Component } from 'react';

class OthersLink extends Component{
    render(){
        return(
        <div className="col-sm-3 col-xs-6">
            <a href="#" data-toggle="modal" data-target="#lightbox">
                <img className="img-fluid portfolio-item" src={this.props.lnk}  alt="..." ng-click="modalLightbox(lnk,$event)"/>
            </a>
        </div>	
        );
    }
}  

export default OthersLink;