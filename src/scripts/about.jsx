import React from 'react';
import Reactdom from 'react-dom';

class About extends React.Component{
    constructor()
    {
        super();
    }

    render(){
        return(
            <div className="section md-padding">
            <div className="bg-img" style={{backgroundImage:'url("'+require('../images/background1.jpg')+'")'}}>
                <div className="overlay"></div>
                </div>	
                <div className="container" style={{marginTop:'60px'}}>
                    <div className="row">
                        <div className="section-header text-center">
                            <h2 className="title">Welcome to Website</h2>
                        </div>
                        <div className="col-md-4">
                            <div className="about">
                                <i className="fa fa-cogs"></i>
                                <h3>Fully Customizible</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.</p>
                                <a href="#">Read more</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about">
                                <i className="fa fa-magic"></i>
                                <h3>Awesome Features</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.</p>
                                <a href="#">Read more</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about">
                                <i className="fa fa-mobile"></i>
                                <h3>Fully Responsive</h3>
                                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.</p>
                                <a href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
	        </div>
	
        );
    }
}
export default About;