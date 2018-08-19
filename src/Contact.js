import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (

            <div className="container">
                <h2 className="sansationLightRegular text-center">{this.props.translate.contactHead}</h2>
                <p className="sansationLightRegular lead text-center">{this.props.translate.contactHeadText}</p>
                <div className="row">
                    <div className="col-md-6 col-xs-12">

                        {/* Form */}
                        <form className="form-horizontal" ng-submit="SubmitContact()">
                            <div className="form-group">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-md-3 col-xs-3 control-label sansationLightRegular">{this.props.translate.contactName}</label>
                                <div className="col-md-12 col-xs-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Nombre"
                                        ng-model="name"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-md-3 col-xs-3 control-label sansationLightRegular">{this.props.translate.contactEmail}</label>
                                <div className="col-md-12 col-xs-12">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail3"
                                        placeholder="Email"
                                        ng-model="email"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-md-3 col-xs-3 control-label sansationLightRegular">{this.props.translate.contactText}</label>
                                <div className="col-md-12 col-xs-12">
                                    <textarea className="form-control" rows="3" ng-model="data"></textarea>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-md-12 col-xs-12 text-right">
                                    <button type="submit" className="btn btn-info">{this.props.translate.contactSend}</button>
                                </div>
                            </div>
                        </form>
                        {/* /Form */}
                    </div>

                    {/*Twitter feed*/}
                    <div className="col-md-6 col-xs-12 twitterFeed">
                        <a
                            className="twitter-timeline"
                            href="https://twitter.com/TenthStudio"
                            data-widget-id="431744614345625601">Tweets by @TenthMediaStd</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;