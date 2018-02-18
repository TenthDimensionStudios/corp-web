import React, { Component } from 'react';
import { GetID } from './Functions';

class TeamMemberSocial extends Component{
    render(){
        return(
        <a href={this.props.lnk.page} target="_blank" className={this.props.lnk.alt} alt={this.props.lnk.alt}>
            <i className={this.props.lnk.css}></i>
        </a>
        );
    }
}

class TeamMember extends Component{
    render(){
        var rows = [];
        if(this.props.colab.social){
            var num = this.props.colab.social.length;
            for(var i = 0; i < num; i++){
                rows.push(<TeamMemberSocial lnk={this.props.colab.social[i]} key={GetID()} />);
            }
        }

        return(
        <div className="col-md-3 col-xs-6 colaborator text-center">

            <div className="social">
                {rows}
            </div>
            <img className="img-fluid rounded-circle front margin0auto" src={"img/" + this.props.colab.img} alt="..." />
            <h3 className="sansationLightRegular">{this.props.colab.name}</h3>
            <p className="sansationLightRegular descUser">{this.props.colab.rol}</p>
        </div>
        );
    }
}

class Team extends Component{
    render(){
        var rows = [];
        if(this.props.translate.teamInfo){
            var num = this.props.translate.teamInfo.length;
            for(var i = 0; i < num; i++){
                rows.push(<TeamMember colab={this.props.translate.teamInfo[i]} key={GetID()} />);
            }
        }

        return(
        <div className="container">
            <div className="col-md-12 text-center">
                <div className="row">
                    <h2 className="sansationLightRegular">{this.props.translate.outTeam}</h2>
                </div>
                <div className="row">
                    {rows}

                    <div className="col-md-3 col-xs-6 colaborator text-center">

                        <img className="img-fluid rounded-circle front margin0auto" src="img/blank_foto.jpeg" alt="..." />
                        <h3 className="sansationLightRegular">{this.props.translate.teamAdd}</h3>
                        <p className="sansationLightRegular descUser"><a className="whiteLink" href="#contact">{this.props.translate.teamAddInfo}</a></p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Team;