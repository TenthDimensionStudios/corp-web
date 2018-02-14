import React, { Component } from 'react';
import translation from './data/Translation';

class Content extends Component {

    constructor(props){
        super(props);
    }

    render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1 text-center">
                    <h2 className="sansationLightRegular">{this.props.translate.introHead}</h2>
                    <p className="lead sansationLightRegular">{this.props.translate.introContent} 
                        <a href="http://isolandimension.com">{this.props.translate.introHead}</a> 
                        {this.props.translate.introReference}
                    </p>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Content;