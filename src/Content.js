import React, { Component } from 'react';

class Content extends Component {
    render() {
      return (
        <div className="container">
            <div className="col align-self-center text-center">
                <h2 className="sansationLightRegular">{this.props.translate.introHead}</h2>
                <p className="lead sansationLightRegular">{this.props.translate.introContent + ' '} 
                    <a href="http://isolandimension.com">{this.props.translate.introHead}</a> 
                    {' ' + this.props.translate.introReference}
                </p>
            </div>
        </div>
      );
    }
  }
  
  export default Content;