import React, { Component } from 'react';
import Lang from './data/Lang';
import axios from 'axios';
import TopRow from './TopRow';

class Top extends Component {

    constructor(props){
        super(props);

        this.state = {langs: [] };
    }

    componentDidMount(){
        var me = this;        
        var promises = [];

        axios.all(promises).then(
            axios.get("/data/languajes.json").then(
                function(response){

                    var rows = []
                    for(var i = 0; i < response.data.length; i++) {
                        var item = new Lang(response.data[i]);
                        rows.push(<TopRow lang={item} app={me.props.app} key={i}/>);
                    }
                    
                    me.setState({langs: rows});
                }
            ).catch(
                function(error){
                    console.log(error);
                }
            )
        );
    }

    render() {        
      return (          
        <div className="vert-text ">
            <a href="#services">
                <img src="img/logo_Tenth_white.png" className="logoTenth animated fadeInDown" alt="Tenth Dimension Studios Logotype" />
            </a>
            <div className="languageMenu row animated fadeInDown">
                <div className="col-md-12 text-center forLanguageMenu ">
                    <div className="container">
                        <div className="col-md-12 text-center">
                            <p>First select your language</p>
                        </div>
                        <div className="col-md-12 text-center">	            
                            {this.state.langs}
                        </div>
                    </div>
                </div>
            </div>
            <div className="menuPage row hidden-xs">

                <div id="forHomeMenu" className="col-md-12 text-center forHomeMenu">

                    <div className="container">
                        <nav id="menu" className="tenthNav row">
                            <div className="col-lg-3 col-md-3 col-xs-3 menuItem animated2s fadeInDown">
                                <a href="#services">
                                    <span className="icon">
                                        <i aria-hidden="true" className="icon-services"></i>
                                    </span>
                                    <span>{this.props.translate.Services}</span>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-xs-3 menuItem animated3s fadeInDown">
                                <a href="#portfolio">
                                    <span className="icon">
                                        <i aria-hidden="true" className="icon-portfolio"></i>
                                    </span>
                                    <span>{this.props.translate.Portfolio}</span>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-xs-3 menuItem animated4s fadeInDown">
                                <a href="#team">
                                    <span className="icon">
                                        <i aria-hidden="true" className="icon-team"></i>
                                    </span>
                                    <span>{this.props.translate.Team}</span>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-xs-3 menuItem animated5s fadeInDown">
                                <a href="#contact">
                                    <span className="icon">
                                        <i aria-hidden="true" className="icon-contact"></i>
                                    </span>
                                    <span>{this.props.translate.Contact}</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Top;