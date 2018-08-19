import React, {Component} from 'react';
import {GetID} from './Functions';

class FooterSocial extends Component {
    render() {
        return (
            <li>
                <a target="_blank" href={this.props.socialData.page}>
                    <i className={this.props.socialData.css}/>
                </a>
            </li>
        );
    }
}

class Footer extends Component {
    render() {
        var rows = [];
        if (this.props.translate.socialWebs) {
            var num = this.props.translate.socialWebs.length;
            for (var i = 0; i < num; i++) {
                rows.push(<FooterSocial socialData={this.props.translate.socialWebs[i]} key={GetID()}/>);
            }
        }
        return (
            <footer>
                <div className="container text-center">
                    <p className="sansationLightRegular">{this.props.translate.socialHead}</p>
                    <ul className="list-inline socialLinks">
                        {rows}
                    </ul>

                    <div className="top-scroll">
                        <a href="#top">
                            <i className="fa fa-circle-arrow-up scroll fa-4x"></i>
                        </a>
                    </div>

                    <p className="sansationLightRegular">Copyright &copy; Tenth Dimension Studios S.L. 2018</p>
                </div>
            </footer>
        );
    }
}

export default Footer;