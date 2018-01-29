import React, { Component } from 'react';
import translation from './data/Translation';
import lang from './data/Lang';

class Top extends Component {
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
                            <a id="{lang.itemID}" className="languageSelector" ng-repeat="lang in availableLanguajes">
                                <div className="phoca-box" ng-click="GetLanguage(lang.itemID)">
                                    <div className="phoca-flagbox">
                                        <span className="phoca-flag {lang.itemClass}"></span>
                                    </div>
                                    <div className="phoca-title">{lang.itemName}</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menuPage row hidden-xs">

                <div id="forHomeMenu" className="col-md-12 text-center forHomeMenu">

                    <div className="container">
                        <nav id="menu" className="tenthNav">
                            <div className="col-lg-3 col-md-3 col-xs-3 menuItem animated2s fadeInDown">
                                <a href="#services">
                                    <span className="icon">
                                        <i aria-hidden="true" className="icon-services"></i>
                                    </span>
                                    <span>{translation.Services}</span>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-xs-3 menuItem animated3s fadeInDown">
                                <a href="#portfolio">
                                    <span className="icon">
                                        <i aria-hidden="true" className="icon-portfolio"></i>
                                    </span>
                                    <span>{translation.Portfolio}</span>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-xs-3 menuItem animated4s fadeInDown">
                                <a href="#team">
                                    <span className="icon">
                                        <i aria-hidden="true" className="icon-team"></i>
                                    </span>
                                    <span>{translation.Team}</span>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-xs-3 menuItem animated5s fadeInDown">
                                <a href="#contact">
                                    <span className="icon">
                                        <i aria-hidden="true" className="icon-contact"></i>
                                    </span>
                                    <span>{translation.Contact}</span>
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