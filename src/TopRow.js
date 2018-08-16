import React, {Component} from 'react';
import Translation from './data/Translation';
import axios from 'axios';

class TopRow extends Component {
    constructor(props) {
        super(props);

        this.GetLanguage = this
            .GetLanguage
            .bind(this);
    }

    GetLanguage() {
        var notify = this.props.app;
        var promises = [];

        var route = "/data/" + this
            .props
            .lang
            .itemName
            .toLowerCase() + "Language.json";

        axios
            .all(promises)
            .then(axios.get(route).then(function (response) {
                localStorage.setItem('translation', JSON.stringify(response));
                var item = new Translation(response.data);
                notify.setState({translate: item});
            }).catch(function (error) {
                console.log(error);
            }));
    }

    render() {
        return (
            <a id={"\"" + this.props.lang.itemID + "\""} className="languageSelector">
                <div className="phoca-box" onClick={this.GetLanguage}>
                    <div className="phoca-flagbox">
                        <span className={"phoca-flag " + this.props.lang.itemClass}></span>
                    </div>
                    <div className="phoca-title">{this.props.lang.itemName}</div>
                </div>
            </a>
        );
    }
}

export default TopRow;