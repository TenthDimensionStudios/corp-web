import React, {Component} from 'react';
import {GetID} from './Functions';

class OurWorkItem extends Component {
    render() {
        return (
            <div className="col-md-4 portfolio-item">
                <a href="#project-link" data-toggle="modal" data-target="#lightbox">
                    <img
                        className="img-fluid"
                        src={this.props.prj.prjLink}
                        alt="..."
                        ng-click="modalLightbox(prj.prjLink,$event)"/>
                </a>
                <h3 className="sansationRegular">
                    <a href="#project-link">{this.props.prj.prjName}</a>
                </h3>
                <p>{this.props.prj.prjInfo}</p>
            </div>
        );
    }
}

class OurWork extends Component {

    render() {
        var rows = [];
        if (this.props.translate.otherProyects) {
            var num = this.props.translate.otherProyects.length;
            for (var i = 0; i < num; i++) {
                rows.push(< OurWorkItem prj = {
                    this.props.translate.otherProyects[i]
                }
                key = {
                    GetID()
                } />);
            }
        }
        return (
            <div id="nuestrosTrabajos" className="hideForCollapse collapse in">

                <div className="row">
                    {rows}
                </div>
                {/* Nuestros Trabajos */}
            </div>
        );
    }
}

export default OurWork;