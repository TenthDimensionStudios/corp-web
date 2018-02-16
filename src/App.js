import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Top from './Top';
import Content from './Content';
import Services from './Services';
import Callout from './Callout';
import Portfolio from './Portfolio';
import Translation from './data/Translation';

class App extends Component {

  constructor(props){
      super(props);

      this.state = {translate: new Translation({})};
  }
  
  render() {
    return (
      <div>
        <a id="menu-toggle" href="#" className="btn btn-lg toggle visible-xs"><i className="fa fa-reorder"></i></a>
            <div id="sidebar-wrapper">{<Sidebar />}</div>

            <div id="top" className="header col-md-12">{<Top app={this} translate={this.state.translate} />}</div>

            {/* Full Page Image Header Area */}
            <div className="getPageContent">

              {/* Intro */}
              <a id="services" className="anchor"></a>
              <div id="content" className="intro"><Content translate={this.state.translate} /></div>
              {/* /Intro */}

              {/* Services */}
              <div id="servicegrp" className="services"><Services translate={this.state.translate} /></div>
              
              {/* Callout */}
              <div id="callout" className="callout"><Callout translate={this.state.translate} /></div>
              {/* /Callout */}

              {/* Portfolio - Main Project */}
              <a id="portfolio" className="anchor"></a>
              <div className="portfolio"><Portfolio translate={this.state.translate} /></div>

              {/* Portfolio - Working Project */}
              <a id="Activeportfolio" className="anchor"></a>
              <div className="portfolio"></div>

              {/* Nuestros trabajos Lista */}
              <div id="ourwork" className="container"></div>

              {/* Call to Action */}
              <a id="team" className="anchor"></a>
              <div id="teamcall" className="call-to-action" ></div>

              {/* Contact */}
              <a id="contact" className="anchor"></a>
              <div id="forcontact" className="forContact"></div>
            </div>

            {/* for lightbox */}
            <div id="lightbox" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="lightbox" aria-hidden="true">
                <div className="modal-dialog">
                  <button type="button" className="close hidden" data-dismiss="modal" aria-hidden="true">×</button>
                  <div className="modal-content">
                    <div className="modal-body">
                      <img src="" alt="..." className="img-responsive"/>
                    </div>
                  </div>
                </div>
                {/* /for lightbox */}
              </div>

            {/*
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.

              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.

              To begin the development, run `npm start` or `yarn start`.
              To create a production bundle, use `npm run build` or `yarn build`.
            */}
      </div>
    );
  }
}

export default App;
