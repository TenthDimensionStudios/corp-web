import React, { Component } from 'react';
import translation from './data/Translation';

class Content extends Component {
    render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1 text-center">
                    <h2 className="sansationLightRegular">{translation.introHead}</h2>
                    <p className="lead sansationLightRegular">{translation.introContent} 
                        <a href="http://isolandimension.com">{translation.introHead}</a> 
                        {translation.introReference}
                    </p>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Content;