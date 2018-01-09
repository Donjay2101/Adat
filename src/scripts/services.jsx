import React from 'react';
import ReactDom from 'react-dom';


class Services extends React.Component{
    render(){
        return(
            <div className="section md-padding">
            <div className="bg-img" style={{backgroundImage:'url("'+require('../images/background1.jpg')+'")'}}>
                <div className="overlay"></div>
                </div>	
                <div className="container">
                    <div className="row">
                        <div className="section-header text-center">
                            <h2 className="title">What we offer</h2>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-diamond"></i>
                                <h3>App Development</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-rocket"></i>
                                <h3>Graphic Design</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-cogs"></i>
                                <h3>Creative Idea</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-diamond"></i>
                                <h3>Marketing</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
                        </div>						
                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-pencil"></i>
                                <h3>Awesome Support</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className="fa fa-flask"></i>
                                <h3>Brand Design</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                            </div>
                        </div>
                    </div>
                </div>
	        </div>
        );
    }
}

export default Services;