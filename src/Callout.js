import React, { Component } from 'react';
import Translation from './data/Translation';

class Callout extends Component {

  constructor(props){
      super(props);

      this.state = {translate: new Translation({})};
  }

    render() {
      return (
        <div className="vert-text">
            <a href="#contact">
                <h1 className="sansationRegular">{this.state.translate.contantIntro}</h1>
            </a>
        </div>
      );
    }
  }
  
  export default Callout;