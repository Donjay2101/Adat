import React from 'react';
import ReactDom from 'react-dom';


class Contact extends React.Component{
    render(){
        return(
            
            <div  className="section md-padding bg-grey">	
            <div className="bg-img" style={{backgroundImage:'url("'+require('../images/background1.jpg')+'")'}}>
			<div className="overlay"></div>
		    </div>	
            <div className="container" style={{boxShadow:'7px 7px 13px 9px #a19c9c',padding:'25px'}}>            
                <div className="row">                    
                    <div className="section-header text-center">
                        <h2 className="title">Get in touch</h2>
                    </div>                                        
                    <div className="col-sm-4">
                        <div className="contact">
                            <i className="fa fa-phone"></i>
                            <h3>Phone</h3>
                            <p>512-421-3940</p>
                        </div>
                    </div>                                        
                    <div className="col-sm-4">
                        <div className="contact">
                            <i className="fa fa-envelope"></i>
                            <h3>Email</h3>
                            <p>email@support.com</p>
                        </div>
                    </div>                                    
                    <div className="col-sm-4">
                        <div className="contact">
                            <i className="fa fa-map-marker"></i>
                            <h3>Address</h3>
                            <p>1739 Bubby Drive</p>
                        </div>
                    </div>                                        
                    <div className="col-md-8 col-md-offset-2">
                        <form className="contact-form">
                            <input type="text" className="input" placeholder="Name"/>
                            <input type="email" className="input" placeholder="Email"/>
                            <input type="text" className="input" placeholder="Subject"/>
                            <textarea className="input" placeholder="Message"></textarea>
                            <button className="main-btn">Send message</button>
                        </form>
                    </div>                    
                </div>                
            </div>	
	</div>
        );
    }
}

export default Contact;