import React, { Component } from 'react';
import OthersLink from './OthersLink';
import Image from './Image'
import { GetID } from './Functions';

class Portfolio extends Component {

    constructor(props){
        super(props)

        this.state = {collapsed: true};
    }

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
        var collapseCName = this.state.collapsed ? "row collapse" : "row";

      return (          
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col align-self-center text-center">
                        <h2 className="sansationLightRegular">{this.props.translate.portfolioIntro}</h2>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="projectDetails container">
                <div className="container">

                    <div className="row">
                        <div className="col-md-8">
                            <Image url={this.props.translate.mainProjectImage} alt="..."/>
                        </div>

                        <div className="col-md-4">
                            <h3 className="sansationRegular">{this.props.translate.mainProject}</h3>
                            <p>{this.props.translate.mainProjectInfo}</p>
                            <h3 className="sansationRegular">{this.props.translate.mainProjectDetailsHeader}</h3>
                            <ul>
                                {rows}                           
                                <li className="webLink"><a href={this.props.translate.mainProjectLink}>{this.props.translate.mainProjectLinkText}</a></li>
                            </ul>
                            <button className="btn btn-primary pull-right" onClick={() => this.setState({collapsed: !this.state.collapsed})}>{this.props.translate.mainProjectAsk}</button>
                        </div>
                    </div>
                    
                    <div className={collapseCName}>
                        <div className="col-lg-12 row">
                            <h3 className="sansationLightRegular">{this.props.translate.mainProjectOthers}</h3>
                        </div>
                        <div className="col-lg-12 row">
                            {rowsOL}				
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Portfolio;