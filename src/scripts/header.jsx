import React from 'react';
import ReactDom from 'react-dom';
import About from './about.jsx';


class Header extends React.Component{
    render(){
		var handleToUpdate=this.props.handleToUpdate;
        return(			
				<nav id="nav"  className=" navbar nav-transparent fixed-nav">
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
							<li className="homelink"><a href="#home" className="iterateMenu" onClick={() => handleToUpdate('home')}>Home</a></li>
							<li ><a className="iterateMenu"  href="#about" onClick={() => handleToUpdate('about')}>About</a></li>
							<li ><a  className="iterateMenu"  href="#portfolio" onClick={() => handleToUpdate('portfolio')}>Portfolio</a></li>
							<li ><a className="iterateMenu" href="#service" onClick={() => handleToUpdate('services')}>Services</a></li>
							<li ><a className="iterateMenu" href="#pricing" onClick={() => handleToUpdate('price')}>Prices</a></li>
							<li ><a className="iterateMenu" href="#team" onClick={() => handleToUpdate('team')}>Team</a></li>
							{/* <li className="has-dropdown ">
							
							<a href="#blog">Blog <span  className="glyphicon glyphicon-chevron-down"></span></a>
								<ul className="dropdown">
									<li><a className="iterateMenu" href="#">blog post</a></li>
								</ul>
							</li> */}
							<li><a className="iterateMenu" href="#contact" onClick={() => handleToUpdate('contact')}>Contact</a></li>
						</ul>
					</div>
				</nav>        	
        );
    }
}

export default Header;