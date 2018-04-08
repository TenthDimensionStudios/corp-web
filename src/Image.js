import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

class Image extends Component{ 

    constructor(props){
        super(props)

        this.state = {isOpen: false};
    }

    render(){
        const { isOpen } = this.state;

        return(
        <div>
            <img className="img-fluid" src={this.props.url} alt={this.props.alt} onClick={() => this.setState({isOpen: true})}/>

            {isOpen && (
                <Lightbox mainSrc={this.props.url} onCloseRequest={() => this.setState({isOpen: false})} />
            )}
        </div>
        )
    };
}

export default Image;