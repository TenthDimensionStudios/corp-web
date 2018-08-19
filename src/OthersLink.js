import React, {Component} from 'react';
import Image from './Image'

class OthersLink extends Component {
    render() {
        return (
            <div className="col-sm-3 col-xs-6">
                <Image url={this.props.lnk} alt="..."/>
            </div>
        );
    }
}

export default OthersLink;