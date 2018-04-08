import React, { Component } from 'react';

class Sidebar extends Component {

    constructor(props){
        super(props)

        this.state = {collapsed: true};
    }

    render() {

        var collapseCName = this.state.collapsed ? "" : "active";

      return (
        <div>
            <button id="menu-toggle" className="btn btn-lg toggle visible-xs" onClick={() => this.setState({collapsed: !this.state.collapsed})}>
                <i className="fa fa-reorder" />
            </button>
            <div id="sidebar-wrapper" className={collapseCName}>
                <ul className="sidebar-nav tenthNav">
                    <li className="menuItem">
                        <a href="#services">
                            <span className="icon">
                                <i aria-hidden="true" className="icon-services"/>
                            </span>
                        </a>
                    </li>
                    <li className="menuItem">
                        <a href="#portfolio">
                            <span className="icon">
                                <i aria-hidden="true" className="icon-portfolio"/>
                            </span>
                        </a>
                    </li>
                    <li className="menuItem">
                        <a href="#team">
                            <span className="icon">
                                <i aria-hidden="true" className="icon-team"/>
                            </span>
                        </a>
                    </li>
                    <li className="menuItem">
                        <a href="#contact">
                            <span className="icon">
                                <i aria-hidden="true" className="icon-contact"/>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      );
    }
  }
  
  export default Sidebar;