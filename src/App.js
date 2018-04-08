import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Top from './Top';
import Content from './Content';
import Services from './Services';
import Callout from './Callout';
import Portfolio from './Portfolio';
import Translation from './data/Translation';
import PortfolioArchive from './PortfolioArchive';
import OurWork from './OurWork';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

import axios from 'axios';

const pStyle = {
  display: 'block'
};

class App extends Component {

  constructor(props){
      super(props);

      this.state = {translate: new Translation({})};
  }   

  
  componentDidMount(){
     var notify = this;
    var promises = [];

    var route = "/data/enLanguage.json";

    axios.all(promises).then(
        axios.get(route).then(
            function(response){
                var item = new Translation(response.data);
                notify.setState({translate: item});
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
      <div>        
        {<Sidebar />}

        {<Top app={this} translate={this.state.translate} />}

        {/* Full Page Image Header Area */}
        <div className="getPageContent">

          {/* Intro */}
          <a id="services" className="anchor" href="#services">
            <div id="content" className="intro">
              <Content translate={this.state.translate} />
            </div>
          </a>

          {/* Services */}
          <div id="servicegrp" className="services"><Services translate={this.state.translate} /></div>
          
          {/* Callout */}
          <div id="callout" className="callout"><Callout translate={this.state.translate} /></div>
          {/* /Callout */}

          {/* Portfolio - Main Project */}
          <a id="portfolio" className="anchor" href="#portfolio">
            <div className="portfolio"><Portfolio translate={this.state.translate} /></div>
          </a>

          {/* Portfolio - Working Project */}
          <a id="Activeportfolio" className="anchor" href="#Activeportfolio">
            <div className="portfolio">
              <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 text-center">
                        <h2 className="sansationLightRegular">{this.state.translate.activePortfolioIntro}</h2>
                        <hr/>
                    </div>
                </div>
              </div>
              {/* Container */}
              <PortfolioArchive translate={this.state.translate} />
            </div>
          </a>

          {/* Nuestros trabajos Lista */}
          <div id="ourwork" className="container">
            <OurWork translate={this.state.translate} />
          </div>

          {/* Call to Action */}
          <a id="team" className="anchor" href="#team">
            <div id="teamcall" className="call-to-action" >
              <Team translate={this.state.translate} />
            </div>
          </a>

          {/* Contact */}
          <a id="contact" className="anchor" href="#contact">
            <div id="forcontact" className="forContact">

              <Contact translate={this.state.translate} />

              <Footer translate={this.state.translate} />

              {/* for going top of page */}
              <p id="back-top" style={pStyle}>
                <a href="#featured">
                  <span><i className="fa fa-fw"></i></span>
                </a>
              </p>
              {/* /for going top of page */}
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
