import React from 'react';
import ReactDom from 'react-dom';


class Header extends React.Component{
    render(){
        return(
            <div id="home">
                <div className="bg-img" style={{backgroundImage:'url('+require('../images/background1.jpg')+')'}}>
			        <div className="overlay"></div>
		        </div>
                <nav id="nav" className="navbar">
			<div className="container">
				<div className="navbar-header">
					<div className="navbar-brand">
						<a href="index.html">
							<img className="logo" src={require('../images/logo.png')} alt="logo"/>
							<img className="logo-alt" src={require('../images/logo-alt.png')} alt="logo"/>
						</a>
					</div>
					<div className="nav-collapse">
						<span></span>
					</div>
				</div>
				<ul className="main-nav nav navbar-nav navbar-right">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#service">Services</a></li>
					<li><a href="#pricing">Prices</a></li>
					<li><a href="#team">Team</a></li>
					<li className="has-dropdown">
					
					<a href="#blog">Blog <span  className="glyphicon glyphicon-chevron-down"></span></a>
						<ul className="dropdown">
							<li><a href="blog-single.html">blog post</a></li>
						</ul>
					</li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		    </nav>
        </div>
        );
    }
}

export default Header;