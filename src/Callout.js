import React, { Component } from 'react';
import translation from './data/Translation';

class Callout extends Component {
    render() {
      return (
        <div className="vert-text">
            <a href="#contact">
                <h1 className="sansationRegular">{translation.contantIntro}</h1>
            </a>
        </div>
      );
    }
  }
  
  export default Callout;