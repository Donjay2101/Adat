import React from 'react';
import ReactDom from 'react-dom';
class Team extends React.Component{
    render(){
        return(
            <div className="section md-padding bg-grey">
            <div className="bg-img" style={{backgroundImage:'url("'+require('../images/background1.jpg')+'")'}}>
                <div className="overlay"></div>
                </div>	
            <div className="container">
                <div className="row">
                    <div className="section-header text-center">
                        <h2 className="title">Our Team</h2>
                    </div>
                    <div className="boxshadow col-sm-3 col-sm-offset-1" >
                        <div className="team">
                            <div className="team-img">
                                <img className="img-responsive" src={require('../images/team1.jpg')} alt=""/>
                                <div className="overlay">
                                    <div className="team-social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-content">
                                <h3>John Doe</h3>
                                <span>Web Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="boxshadow col-sm-3 col-sm-offset-1">
                        <div className="team">
                            <div className="team-img">
                                <img className="img-responsive" src={require('../images/team2.jpg')} alt=""/>
                                <div className="overlay">
                                    <div className="team-social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-content">
                                <h3>John Doe</h3>
                                <span>Web Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="boxshadow col-sm-3 col-sm-offset-1">
                        <div className="team">
                            <div className="team-img">
                                <img className="img-responsive" src={require('../images/team3.jpg')} alt=""/>
                                <div className="overlay">
                                    <div className="team-social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-content">
                                <h3>John Doe</h3>
                                <span>Web Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Team;